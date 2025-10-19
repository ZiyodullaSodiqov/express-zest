import { IonContent, IonList, IonItem, IonLabel, IonRadio, IonButton, IonApp } from '@ionic/react';
import { useState, useEffect, useRef } from 'react';
import { Storage } from '@ionic/storage';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import './Tab3.css';
import { useHistory } from 'react-router-dom';

const Tab3: React.FC = () => {
  const history = useHistory();

  const questions = [
    { id: 1, text: "Jismoniy qiyofangizni qanday ta'riflaysiz?", options: ["Ozg'in", "O'rta o'lchamli", "Katta o'lchamli", "Ancha ortiqcha vaznli"] },
    { id: 2, text: "Orzudagi jismoniy qiyofangiz qanday?", options: ["Ozg'in", "Qomatli / Egri-bugri shaklli", "Tarang va mushakli", "O'rtacha"] },
    { id: 3, text: "Og'irligingiz odatda qanday o'zgaradi?", options: ["Tezda og'irlik to'playman, lekin sekin yo'qotaman", "Tezda og'irlik to'playman va yo'qotaman", "Og'irlik yoki mushak to'plashda qiynalaman"] },
    { id: 4, text: "Hayotingizdagi eng yaxshi jismoniy formangizda qachon bo'lgansiz?", options: ["Hech qachon", "Bir yildan kam vaqt oldin", "2-3 yil oldin"] },
    { id: 5, text: "Qaysi sohalarga ko'proq e'tibor berasiz?", options: ["Qorin", "Oyoq", "Ko'krak"] },
    { id: 6, text: "Egiluvchanligingiz qanday darajada?", options: ["Juda yaxshi egilaman", "Endi boshlayapman", "Unchalik yaxshi emas", "Ishonchim yo'q"] },
    { id: 7, text: "Zinapoyadan chiqqaningizda nafas qisishi bo'ladimi?", options: ["Juda nafasim qisadi, gapira olmayman", "Bir oz nafasim qisadi, lekin gapira olaman", "Bir zinapoya chiqsam hammasi joyida", "Bir necha zinapoyani bemalol chiqaman"] },
    { id: 8, text: "Quyidagilardan birortasi bilan qiynalasizmi?", options: ["Belim sezgir", "Tizzam sezgir", "Yuqoridagilarning hech biri emas"] },
    { id: 9, text: "Tez-tez jismoniy mashq qilasizmi?", options: ["Deyarli har kuni", "Oyda bir necha marta", "Haftasiga bir necha marta", "Hech qachon"] },
    { id: 10, text: "Tez-tez piyoda yurishga chiqasiz?", options: ["Deyarli har kuni", "Haftasiga 3-4 marta", "Haftasiga 1-2 marta", "Oyiga bir marta bo'lsa kerak"] },
    { id: 11, text: "Ish jadvalingiz qanday?", options: ["9:00 dan 17:00 gacha", "Soatlarim moslashuvchan", "Kechki smenalar", "Ishlamayman / Nafaqadaman"] },
    { id: 12, text: "Odatdagi kuningizni qanday ta'riflaysiz?", options: ["Ko'p vaqtimni o'tirib o'tkazaman", "Faol tanaffuslar qilaman", "Kunimni asosan oyoqda o'tkazaman"] },
    { id: 13, text: "Kun davomida energiya darajangiz qanday bo'ladi?", options: ["Past, doimiy charchoq his qilaman", "Tushlikdan keyin charchoq bosadi", "Ovqatlanishdan oldin holsizlanaman", "Yuqori va barqaror"] },
    { id: 14, text: "Kun davomida qancha suv ichasiz?", options: ["Faqat choy yoki qahva ichaman", "Taxminan 2 stakan", "2-6 stakan", "6 stakandan ko'p"] },
    { id: 15, text: "Odatda qancha uxlaysiz?", options: ["5 soatdan kam", "5-6 soat", "7-8 soat", "8 soatdan ko'p"] },
    { id: 16, text: "Odatda nonushtani qachon qilasiz?", options: ["6:00-8:00 oralig'ida", "8:00-10:00 oralig'ida", "10:00-12:00 oralig'ida", "Odatda nonushta qilmayman"] },
    { id: 17, text: "Tushlikni qachon qilasiz?", options: ["10:00-12:00 oralig'ida", "12:00-14:00 oralig'ida", "14:00-16:00 oralig'ida", "Odatda tushlik qilmayman"] },
    { id: 18, text: "Kechki ovqatni qachon qilasiz?", options: ["16:00-18:00 oralig'ida", "18:00-20:00 oralig'ida", "20:00-22:00 oralig'ida", "Odatda kechki ovqat qilmayman"] },
    { id: 19, text: "Quyidagi odatlardan qaysi biri sizga tegishli?", options: ["Emotsional yoki zerikkan paytda ovqatlanish", "Haddan tashqari ko'p ovqat yeyish", "Kechki payt tamaddi qilish", "Hech biri emas"] },
    { id: 20, text: "Qanday ovqatlarga eng ko'p ishtaha bo'ladi?", options: ["Shirinliklar", "Kuchli ta'mli ovqatlar", "Tez tayyorlanadigan ovqatlar", "Lapsha", "Hech biri emas"] },
    { id: 21, text: "So'nggi yillarda quyidagi holatlardan qaysilari sizda vazn ortishiga sabab bo'lgan?", options: ["Ishdagi bosim", "Oilaviy hayotdagi bandlik", "Ajralish yoki munosabatlarning buzilishi", "Yoshi ulg'aygani sari sekinlashgan metabolizm", "Moliyaviy muammolar"] },
    { id: 22, text: "Formaga kirishdagi asosiy maqsadingiz nima?", options: ["Tanadagi mamnunlik va o'ziga ishonch hosil qilish", "O'zimni sog'lom va quvvatli his qilish", "Boshqa sabab"] },
    { id: 23, text: "Menstruatsiya siklingiz qanday o'tadi?", options: ["Juda kuchli og'riq bo'ladi, hushimni yo'qotishim mumkin", "Og'riqli, kayfiyatim yo'qoladi", "Yengil og'riq bo'ladi, kayfiyatim o'zgarmaydi", "Umuman og'riq bo'lmaydi"] },
    { id: 24, text: "Bu paytda qanday choralar qo'llaysiz?", options: ["Yotoq rejimi", "Dori-darmon", "Hech narsa", "Og'riqni yengillashtiruvchi mashqlar"] },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [storageReady, setStorageReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const storageRef = useRef<Storage | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const slideIn = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const optionAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  };

  // Initialize storage
  useEffect(() => {
    const initializeStorage = async () => {
      try {
        const storage = new Storage();
        await storage.create();
        storageRef.current = storage;
        
        // Check if answers already exist
        const existingAnswers = await storage.get('userAnswers');
        if (existingAnswers && Object.keys(existingAnswers).length > 0) {
          history.push('/tab2');
          return;
        }
        
        setStorageReady(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Storage initialization failed:', error);
        setIsLoading(false);
      }
    };

    initializeStorage();
  }, [history]);

  const selectOption = (questionId: number, option: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const saveAndFinish = async () => {
    if (!storageReady || !storageRef.current) {
      console.error('Storage is not ready yet');
      return;
    }

    try {
      setIsSaving(true);
      await storageRef.current.set('userAnswers', selectedAnswers);
      console.log('Data saved successfully:', selectedAnswers);
      
      // Add a small delay to show loading animation
      setTimeout(() => {
        setIsSaving(false);
        history.push('/tab2');
      }, 1500);
    } catch (error) {
      console.error('Error saving data:', error);
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <IonApp>
        <IonContent fullscreen style={{ '--background': '#96242c' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)'
            }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '4px solid #fabdbc',
                borderTop: '4px solid transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h6" color="#fff" fontWeight="bold">
                BMI
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '20px' }}
            >
              <Typography variant="h6" color="#fff" fontWeight="bold">
                Yuklanmoqda...
              </Typography>
            </motion.div>
          </motion.div>
        </IonContent>
      </IonApp>
    );
  }

  return (
    <IonApp>
      <IonContent scrollY={true} style={{ 
        '--background': 'linear-gradient(135deg, #f8fafc 0%, #e9ecef 100%)', 
        position: 'relative', 
        zIndex: 1 
      }}>
        {/* Background with overlay */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(150, 36, 44, 0.9) 0%, rgba(122, 29, 36, 0.8) 100%)',
            height: '40vh',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#fff', 
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              Shaxsiy malumotlaringizni to'ldiring.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#fabdbc', 
                textAlign: 'center',
                mt: 2,
                fontSize: '1.1rem'
              }}
            >
              {currentSlide + 1} / {questions.length}
            </Typography>
          </motion.div>
        </Box>

        <div className="swiper-container" style={{ marginTop: '35vh', position: 'relative', zIndex: 2 }}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {questions.map((question, index) => (
              <SwiperSlide key={question.id}>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  className="slide-content"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: '24px',
                    padding: '24px',
                    margin: '16px',
                    boxShadow: '0 8px 32px rgba(150, 36, 44, 0.15)',
                    border: '1px solid rgba(150, 36, 44, 0.1)'
                  }}
                >
                  <motion.div variants={slideIn}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#96242c',
                        fontWeight: 'bold',
                        mb: 3,
                        fontSize: '1.2rem',
                        lineHeight: 1.4,
                        textAlign: 'center'
                      }}
                    >
                      {question.text}
                    </Typography>
                  </motion.div>

                  <IonList style={{ background: 'transparent' }}>
                    <AnimatePresence>
                      {question.options.map((option, optionIndex) => (
                        <motion.div
                          key={optionIndex}
                          variants={optionAnimation}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: optionIndex * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <IonItem 
                            onClick={() => selectOption(question.id, option)}
                            style={{
                              '--background': selectedAnswers[question.id] === option 
                                ? 'rgba(150, 36, 44, 0.1)' 
                                : 'transparent',
                              borderRadius: '12px',
                              marginBottom: '8px',
                              border: selectedAnswers[question.id] === option 
                                ? '2px solid #96242c' 
                                : '1px solid rgba(150, 36, 44, 0.2)',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <IonLabel style={{ 
                              color: '#96242c',
                              fontWeight: selectedAnswers[question.id] === option ? '600' : '400'
                            }}>
                              {option}
                            </IonLabel>
                            <IonRadio 
                              slot="start" 
                              style={{
                                '--color': '#96242c',
                                '--color-checked': '#96242c'
                              }}
                              aria-checked={selectedAnswers[question.id] === option} 
                            />
                          </IonItem>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </IonList>

                  <motion.div 
                    className="button-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ 
                      display: 'flex', 
                      gap: '12px', 
                      marginTop: '24px',
                      justifyContent: 'center'
                    }}
                  >
                    {currentSlide > 0 && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <IonButton 
                          onClick={prevSlide} 
                          className="prev-btn"
                          style={{
                            '--background': 'rgba(150, 36, 44, 0.1)',
                            '--color': '#96242c',
                            '--border-radius': '12px',
                            fontWeight: '600'
                          }}
                        >
                          Orqaga
                        </IonButton>
                      </motion.div>
                    )}
                    {currentSlide < questions.length - 1 ? (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <IonButton 
                          onClick={nextSlide} 
                          className="next-btn"
                          style={{
                            '--background': '#96242c',
                            '--color': '#fff',
                            '--border-radius': '12px',
                            fontWeight: '600'
                          }}
                        >
                          Keyingi
                        </IonButton>
                      </motion.div>
                    ) : (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <IonButton 
                          onClick={saveAndFinish}  
                          className="finish-btn"
                          disabled={!storageReady || isSaving}
                          style={{
                            '--background': isSaving ? '#fabdbc' : '#96242c',
                            '--color': '#fff',
                            '--border-radius': '12px',
                            fontWeight: '600',
                            minWidth: '120px'
                          }}
                        >
                          {isSaving ? (
                            <CircularProgress size={20} style={{ color: '#fff' }} />
                          ) : (
                            'Tugatish'
                          )}
                        </IonButton>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            gap: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 16px',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(150, 36, 44, 0.2)'
          }}>
            {questions.map((_, index) => (
              <motion.div
                key={index}
                animate={{ 
                  scale: currentSlide === index ? 1.2 : 1,
                  backgroundColor: currentSlide === index ? '#96242c' : '#fabdbc'
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
                onClick={() => swiperRef.current?.slideTo(index)}
              />
            ))}
          </Box>
        </motion.div>
      </IonContent>
    </IonApp>
  );
};

export default Tab3;