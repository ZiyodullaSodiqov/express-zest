import { 
  IonContent, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/react';
import { 
  Box, 
  Typography, 
  Avatar,
  styled,
  Divider
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Storage } from '@ionic/storage';
import { Person as PersonIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const AnswerItem = styled(IonItem)(({ theme }) => ({
  '--background': '#ffffff',
  borderRadius: '16px',
  marginBottom: '12px',
  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '1px solid rgba(150, 36, 44, 0.1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(150, 36, 44, 0.15)'
  }
}));

const questions = [
  { id: 1, text: "Jismoniy qiyofangizni qanday ta'riflaysiz?" },
  { id: 2, text: "Orzudagi jismoniy qiyofangiz qanday?" },
  { id: 3, text: "Og'irligingiz odatda qanday o'zgaradi?" },
  { id: 4, text: "Hayotingizdagi eng yaxshi jismoniy formangizda qachon bo'lgansiz?" },
  { id: 5, text: "Qaysi sohalarga ko'proq e'tibor berasiz?" },
  { id: 6, text: "Egiluvchanligingiz qanday darajada?" },
  { id: 7, text: "Zinapoyadan chiqqaningizda nafas qisishi bo'ladimi?" },
  { id: 8, text: "Quyidagilardan birortasi bilan qiynalasizmi?" },
  { id: 9, text: "Tez-tez jismoniy mashq qilasizmi?" },
  { id: 10, text: "Tez-tez piyoda yurishga chiqasiz?" },
  { id: 11, text: "Ish jadvalingiz qanday?" },
  { id: 12, text: "Odatdagi kuningizni qanday ta'riflaysiz?" },
  { id: 13, text: "Kun davomida energiya darajangiz qanday bo'ladi?" },
  { id: 14, text: "Kun davomida qancha suv ichasiz?" },
  { id: 15, text: "Odatda qancha uxlaysiz?" },
  { id: 16, text: "Odatda nonushtani qachon qilasiz?" },
  { id: 17, text: "Tushlikni qachon qilasiz?" },
  { id: 18, text: "Kechki ovqatni qachon qilasiz?" },
  { id: 19, text: "Quyidagi odatlardan qaysi biri sizga tegishli?" },
  { id: 20, text: "Qanday ovqatlarga eng ko'p ishtaha bo'ladi?" },
  { id: 21, text: "So'nggi yillarda quyidagi holatlardan qaysilari sizda vazn ortishiga sabab bo'lgan?" },
  { id: 22, text: "Formaga kirishdagi asosiy maqsadingiz nima?" },
  { id: 23, text: "Menstruatsiya siklingiz qanday o'tadi?" },
  { id: 24, text: "Bu paytda qanday choralar qo'llaysiz?" },
];

const Tab2: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const storage = new Storage();

  useEffect(() => {
    const loadAnswers = async () => {
      await storage.create();
      const answers = await storage.get('userAnswers');
      
      // Simulate loading
      setTimeout(() => {
        if (!answers || Object.keys(answers).length === 0) {
          history.push('/');
          return;
        }
        setUserAnswers(answers);
        setIsLoading(false);
      }, 1000);
    };
    loadAnswers();
  }, [history]);

  const getQuestionText = (id: number) => {
    const question = questions.find(q => q.id === parseInt(id.toString()));
    return question ? question.text : `Savol ${id}`;
  };

  if (isLoading) {
    return (
      <IonPage>
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
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ 
          background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(150, 36, 44, 0.3)',
          border: 'none'
        }}>
          <IonButtons slot="start">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IonBackButton defaultHref="/tab1" style={{ 
                color: '#96242c',
                '--color': '#96242c'
              }} />
            </motion.div>
          </IonButtons>
          {/* <motion.div {...scaleIn}>
            <IonTitle style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#96242c',
            }}>
              Sizning Javoblaringiz
            </IonTitle>
          </motion.div> */}
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen style={{ 
        '--background': '#f8fafc',
        padding: '16px'
      }}>
        <Box sx={{ 
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <motion.div {...fadeInUp}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold',
              mb: 3,
              color: '#96242c',
              textAlign: 'center',
              paddingTop:'25px', 
            }}>
              Sizning Javoblaringiz
            </Typography>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <IonList style={{ background: 'transparent' }}>
              <AnimatePresence>
                {Object.entries(userAnswers).map(([questionId, answer], index) => (
                  <motion.div
                    key={questionId}
                    variants={itemAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Box sx={{ mb: 3, margin: '0px 10px' }}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <AnswerItem>
                          <IonLabel>
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              mb: 2,
                              padding: '8px 0'
                            }}>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Avatar sx={{ 
                                  bgcolor: 'rgba(150, 36, 44, 0.1)', 
                                  color: '#96242c',
                                  width: 36,
                                  height: 36,
                                  mr: 2,
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                  border: '2px solid #fabdbc'
                                }}>
                                  {questionId}
                                </Avatar>
                              </motion.div>
                              <Typography variant="subtitle2" sx={{ 
                                fontWeight: 600,
                                color: '#96242c',
                                lineHeight: 1.4
                              }}>
                                {getQuestionText(parseInt(questionId))}
                              </Typography>
                            </Box>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              <Box sx={{ 
                                backgroundColor: 'rgba(250, 189, 188, 0.1)',
                                borderRadius: '12px',
                                padding: '16px',
                                borderLeft: '4px solid #fabdbc'
                              }}>
                                <Typography variant="body2" sx={{ 
                                  color: '#96242c',
                                  lineHeight: 1.6,
                                  fontWeight: 500
                                }}>
                                  {answer}
                                </Typography>
                              </Box>
                            </motion.div>
                          </IonLabel>
                        </AnswerItem>
                      </motion.div>
                      {index < Object.keys(userAnswers).length - 1 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Divider sx={{ 
                            my: 2, 
                            backgroundColor: 'rgba(150, 36, 44, 0.1)',
                            height: '2px',
                            borderRadius: '1px'
                          }} />
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>
                ))}
              </AnimatePresence>
            </IonList>
          </motion.div>
          
          <AnimatePresence>
            {Object.keys(userAnswers).length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Box sx={{ 
                  textAlign: 'center',
                  mt: 4,
                  p: 4,
                  backgroundColor: 'rgba(150, 36, 44, 0.05)',
                  borderRadius: '16px',
                  border: '2px dashed rgba(150, 36, 44, 0.2)'
                }}>
                  <motion.div
                    animate={{ 
                      rotate: [0, -5, 0, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <PersonIcon sx={{ 
                      fontSize: 48, 
                      color: '#96242c',
                      opacity: 0.7,
                      mb: 2
                    }} />
                  </motion.div>
                  <Typography variant="h6" sx={{ 
                    color: '#96242c',
                    fontWeight: 'bold',
                    mb: 1
                  }}>
                    Hech qanday javob topilmadi
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#96242c',
                    opacity: 0.7
                  }}>
                    Savollarga javob berishni boshlang
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating action button for going back */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Avatar
                onClick={() => history.push('/tab1')}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: '#96242c',
                  color: '#fff',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.3)',
                  border: '2px solid #fabdbc'
                }}
              >
                <PersonIcon />
              </Avatar>
            </motion.div>
          </motion.div>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;