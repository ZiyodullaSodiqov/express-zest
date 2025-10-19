import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  Chip,
  styled
} from '@mui/material';
import { 
  PlayCircle,
  FitnessCenter,
  AccessTime,
  Restore,
  SportsGymnastics,
  Timer,
  Directions
} from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { 
    type: "spring", 
    stiffness: 100, 
    damping: 15,
    duration: 0.8 
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Styled Components
const MainCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  borderRadius: '28px',
  padding: '32px',
  marginBottom: '32px',
  boxShadow: '0 20px 60px rgba(150, 36, 44, 0.3)',
  color: '#fff',
  border: '3px solid rgba(250, 189, 188, 0.4)',
  position: 'relative',
  overflow: 'hidden'
}));

const ExerciseCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.9) 100%)',
  borderRadius: '20px',
  marginBottom: '24px',
  boxShadow: '0 8px 30px rgba(150, 36, 44, 0.15)',
  border: '2px solid rgba(250, 189, 188, 0.3)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 50px rgba(150, 36, 44, 0.25)',
    border: '2px solid rgba(250, 189, 188, 0.6)'
  }
}));

const VideoContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fabdbc 0%, #f8a5a5 100%)',
  borderRadius: '16px',
  padding: '20px',
  marginTop: '16px',
  boxShadow: '0 6px 25px rgba(150, 36, 44, 0.2)',
  color: '#96242c',
  border: '2px solid rgba(150, 36, 44, 0.15)'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: '#fff',
  marginBottom: '24px',
  fontSize: '1.8rem',
  borderLeft: '6px solid #fabdbc',
  paddingLeft: '20px',
  textShadow: '0 4px 12px rgba(0,0,0,0.3)',
  background: 'linear-gradient(135deg, #fff, #fabdbc)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));

const ExerciseNumber = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  color: '#fff',
  borderRadius: '12px',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  boxShadow: '0 4px 15px rgba(150, 36, 44, 0.3)',
  marginBottom: '16px'
}));

const YouTubeIframe = styled('iframe')(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  border: '3px solid rgba(150, 36, 44, 0.2)'
}));

const Tab7: React.FC = () => {
  const history = useHistory();

  const exercises = [
    {
      id: 1,
      description: "Orqa bilan yotgan holatda oyoqlar tekis, qo'llar yonda va pastda. Oyoqlar tizza qismidan bukilgan holatda, ko'krak qafasiga tekkaziladi va qo'llar yordamida tizzalar ushlab turiladi.",
      position: "Tizzalar ko'krak qafasiga tekkazilgan holatda mashq bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "20-30 soniya",
      videoId: "yy3L_ge3rSo", // O'zingizning video ID'ingizni qo'ying
      videoStart: 10,
    },
    {
      id: 2,
      description: "Orqa bilan yotgan holatda oyoqlar tekis, qo'llar yonda va pastda. Oyoqlar tizza qismidan bukilgan holatda, oyoq kaft qismidan ushlab, gavdani tutib turiladi.",
      position: "Qo'llar oyoq kaftini ushlab turgan holatda bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "UUcoAmhFDXc∂", // O'zingizning video ID'ingizni qo'ying
      videoStart: 30
    },
    {
      id: 3,
      description: "Orqa bilan yotgan holatda oyoqlar tekis, qo'llar yonda va pastda. Oyoqlar tizza qismidan bukilgan yonga ochilgan holatda, kapalak shaklida ochib yopiladi, qo'llar tos qismida.",
      position: "Oyoqlarni yengil harakat qildirilgan holatda ortiqcha kuch ishlatmasdan bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "10-15 martadan",
      rest: "30-40 soniya",
      videoId: "ThrgY3L2laQ", // O'zingizning video ID'ingizni qo'ying
      videoStart: 60
    },
    {
      id: 4,
      description: "Qo'llarga tayanib o'tirgan holatda. O'ng oyoq tizza qismidan bukiladi, tekkis chap oyoqni yoniga qo'yiladi, o'ng qo'lga tayaniladi, chap qo'l yuqoriga ko'tariladi va tushiriladi. Shuning o'zi boshqa tomonga.",
      position: "Boshni to'g'ri tutgan holatda nafas olish ritmiga e'tibor qaratib bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "4q7pFCqqhj4", // O'zingizning video ID'ingizni qo'ying
      videoStart: 90
    },
    {
      id: 5,
      description: "Tizzalarni bukib o'tirgan holatda, qo'lla yuqorida. Nafas olinadi va chiqariladi.",
      position: "Qo'llar yuqorida turgan holatda mashq bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "T0cIRvbrK2E", // O'zingizning video ID'ingizni qo'ying
      videoStart: 120
    },
    {
      id: 6,
      description: "Oyoqlar yonga bukilgan holatda, qo'llar yonda pastda. Oldinga egilish, qo'llar oldinda pastda.",
      position: "Oldinga egilgan holatda mashq bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "Vrx6txRQAm0", // O'zingizning video ID'ingizni qo'ying
      videoStart: 150
    },
    {
      id: 7,
      description: "Tizzalarni bukib o'tirgan holatda, o'ng qo'l yuqorida. Gavdamizni o'ng tomonga bukgan holatda, o'ng qo'l yonda pastda ushlab turiladi.",
      position: "O'ng qo'l yonda pastda ushlab turgan holatda bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "UkZaOeg7DwU", // O'zingizning video ID'ingizni qo'ying
      videoStart: 180
    },
    {
      id: 8,
      description: "Tizzalarni bukib o'tirgan holatda, qo'lla yuqorida. Gavdamizni o'ng tomonga bukgan holatda, o'ng qo'l yonda pastda, chap qo'l yonda orqada ushlab turiladi.",
      position: "O'ng qo'l yonda pastda va chap qo'l yonda orqada ushlab turgan holatda mashq bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-50 soniya",
      videoId: "ohjammc_P1Q", // O'zingizning video ID'ingizni qo'ying
      videoStart: 210
    },
    {
      id: 9,
      description: "Tizzalar bukilgan holatda, qo'llar oldinda pastda. Gavdani harakatlantiriladi.",
      position: "Gavda harakatlantirilgan holatda mashq bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-50 soniya",
      videoId: "ohjammc_P1Q", // O'zingizning video ID'ingizni qo'ying
      videoStart: 240
    },
    {
      id: 10,
      description: "Qorin bilan yotgan holatda, qo'llar yonda pastda. Chap oyoq tizza qismidan bukiladi, qo'llar oldinda bukilgan holatda ushlab turiladi.",
      position: "Qorin bilan yotgan holatda, qo'llar tizza qismidan bukilgan holda bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "BOXz-fbw2b0", // O'zingizning video ID'ingizni qo'ying
      videoStart: 270
    },
    {
      id: 11,
      description: "Oyoqlar yonga bukilgan holatda, qo'llar oldinda pastda. Oldinga egilish, qo'llar oldinda pastda.",
      position: "Oldinga egilgan holatda mashq bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-50 soniya",
      videoId: "VIDEO_ID_11", // O'zingizning video ID'ingizni qo'ying
      videoStart: 300
    },
    {
      id: 12,
      description: "Orqa bilan yotgan holatda, oyoqlar tizza qismidan bukilgan va qo'llar yonda pastda. Tizzalar ushlagan holatda oyoqlar doira shaklida aylantiriladi.",
      position: "Tizzalarni ushlagan holatda oyoqlar doira shaklida aylantirilgan holda bajariladigan mashq",
      approaches: "2-3 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-50 soniya",
      videoId: "VIDEO_ID_12", // O'zingizning video ID'ingizni qo'ying
      videoStart: 330
    },
    {
      id: 13,
      description: "Orqa bilan yotgan holatda oyoqlar tekis, qo'llar yonda va pastda. Oyoqlarni tizza qismidan bukgan holatda, gavdamizni o'ngga buramiz, Chap qo'l yonga, o'ng qo'l tizza yon qismida. Shuning o'zi boshqa tomonga.",
      position: "Gavdani burgan holatda mashq bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "VIDEO_ID_13", // O'zingizning video ID'ingizni qo'ying
      videoStart: 360
    },
    {
      id: 14,
      description: "Qorin bilan yotgan holatda, qo'llar yonda pastda. Qo'l gavda ustki qismida, gavdani ko'taramiz.",
      position: "Qo'l gavdani ustki qismida turgan holatda bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-40 soniyadan",
      rest: "30-40 soniya",
      videoId: "VIDEO_ID_14", // O'zingizning video ID'ingizni qo'ying
      videoStart: 390
    },
    {
      id: 15,
      description: "Tizzalarni bukib o'tirgan holatda, qo'llar orqada pastda. Nafas olamiz va chiqaramiz.",
      position: "Qo'llar orqada pastda turgan holatda mashq bajariladi",
      approaches: "2-3 yondashuvda",
      duration: "30-40 soniyadan",
      rest: "30-40 soniya",
      videoId: "VIDEO_ID_15", // O'zingizning video ID'ingizni qo'ying
      videoStart: 420
    },
    {
      id: 16,
      description: "Qo'llarga tayanib o'tirgan holatda. Qo'llar oldinda tizza ustki qismida, oyoq uchki qismini doira shaklida aylantiriladi, oyoqlarni harakatlantiriladi.",
      position: "Oyoqlar uchki qismi aylantirligandan so'ng, oyoqlarni qolgan qismlari harakatlantirilgan holatda mashq bajariladi",
      approaches: "3-4 yondashuvda",
      duration: "30-60 soniyadan",
      rest: "30-40 soniya",
      videoId: "VIDEO_ID_16", // O'zingizning video ID'ingizni qo'ying
      videoStart: 450
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ 
          background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
          color: '#fff',
          boxShadow: '0 8px 30px rgba(150, 36, 44, 0.4)',
          border: 'none'
        }}>
          <IonButtons slot="start">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IonBackButton defaultHref="/home" style={{ 
                color: '#fff',
                '--color': '#fff'
              }} />
            </motion.div>
          </IonButtons>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <IonTitle style={{ 
              fontSize: '1.3rem',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Mashqlar Dasturi
            </IonTitle>
          </motion.div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen style={{ 
        '--background': 'linear-gradient(135deg, #f8fafc 0%, #e9ecef 100%)',
        padding: '20px'
      }}>
        <Box sx={{ 
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Main Header */}
          <motion.div {...fadeInUp}>
            <MainCard>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FitnessCenter sx={{ fontSize: 56, color: '#fabdbc', mr: 3 }} />
                </motion.div>
                <Box>
                  <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 1 }}>
                    Mashqlar Mazmuni
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600 }}>
                    16 ta Limfadrenaj va Pilates Mashqlari
                  </Typography>
                </Box>
              </Box>
            </MainCard>
          </motion.div>

          {/* Exercises List */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                variants={cardAnimation}
                whileHover={{ scale: 1.02 }}
              >
                <ExerciseCard>
                  <CardContent sx={{ padding: '24px' }}>
                    {/* Exercise Header */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <ExerciseNumber>
                        {exercise.id}
                      </ExerciseNumber>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#96242c', mb: 2 }}>
                          Mashq {exercise.id}
                        </Typography>
                        
                        {/* Exercise Description */}
                        <Typography variant="body1" sx={{ 
                          color: 'rgba(150, 36, 44, 0.9)', 
                          lineHeight: 1.6,
                          mb: 2
                        }}>
                          {exercise.description}
                        </Typography>

                        {/* Position Instructions */}
                        <Typography variant="body2" sx={{ 
                          color: 'rgba(150, 36, 44, 0.8)', 
                          fontStyle: 'italic',
                          mb: 3,
                          padding: '12px',
                          background: 'rgba(250, 189, 188, 0.1)',
                          borderRadius: '8px',
                          borderLeft: '3px solid #fabdbc'
                        }}>
                          <strong>Tashkiliy ko'rsatma:</strong> {exercise.position}
                        </Typography>

                        {/* Exercise Parameters */}
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                          <Chip 
                            icon={<Directions />} 
                            label={`Yondashuv: ${exercise.approaches}`}
                            sx={{ 
                              background: 'linear-gradient(135deg, #fabdbc, #f8a5a5)',
                              color: '#96242c',
                              fontWeight: 600
                            }}
                          />
                          <Chip 
                            icon={<Timer />} 
                            label={`Davomiylik: ${exercise.duration}`}
                            sx={{ 
                              background: 'linear-gradient(135deg, #fabdbc, #f8a5a5)',
                              color: '#96242c',
                              fontWeight: 600
                            }}
                          />
                          <Chip 
                            icon={<Restore />} 
                            label={`Dam olish: ${exercise.rest}`}
                            sx={{ 
                              background: 'linear-gradient(135deg, #96242c, #7a1d24)',
                              color: '#fff',
                              fontWeight: 600
                            }}
                          />
                        </Box>

                        {/* Embedded YouTube Video for Each Exercise */}
                        <VideoContainer>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <motion.div {...floatingAnimation}>
                              <PlayCircle sx={{ fontSize: 32, color: '#96242c', mr: 2 }} />
                            </motion.div>
                            <Typography variant="h6" fontWeight="bold" sx={{ color: '#96242c' }}>
                              Mashq {exercise.id} Video Ko'rsatmasi
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <YouTubeIframe
                              width="100%"
                              height="315"
                              src={`https://www.youtube.com/embed/${exercise.videoId}?start=${exercise.videoStart}&autoplay=0&rel=0`}
                              title={`Mashq ${exercise.id} video ko'rsatmasi`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </Box>
                          
                          <Typography variant="body2" sx={{ 
                            color: 'rgba(150, 36, 44, 0.8)', 
                            textAlign: 'center',
                            mt: 2,
                            fontStyle: 'italic'
                          }}>
                            Video {exercise.videoStart} soniyadan boshlanadi
                          </Typography>
                        </VideoContainer>
                      </Box>
                    </Box>
                  </CardContent>
                </ExerciseCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Background Decorative Elements */}
          <motion.div
            style={{
              position: 'fixed',
              top: '20%',
              left: '5%',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #96242c, #fabdbc)',
              opacity: 0.1,
              zIndex: -1
            }}
            {...floatingAnimation}
          />
          <motion.div
            style={{
              position: 'fixed',
              bottom: '10%',
              right: '5%',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fabdbc, #96242c)',
              opacity: 0.05,
              zIndex: -1
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Tab7;