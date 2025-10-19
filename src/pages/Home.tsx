import { IonContent, IonPage, IonButton, IonAvatar } from '@ionic/react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Divider, 
  Avatar,
  styled,
  TextField,
  Grid,
  CircularProgress,
  Collapse,
  Fade,
  Grow
} from '@mui/material';
import { 
  LocalFireDepartment as FireIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  FitnessCenter as ExerciseIcon,
  MonitorWeight as WeightIcon,
  Height as HeightIcon,
  Calculate as CalculateIcon,
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Person as PersonIcon,
  SportsMartialArts,
  SportsGymnastics,
  Checklist,
  MenuBook,
  FitnessCenter,
  SelfImprovement,
  Favorite,
  EventNote,
  Psychology,
  QuestionAnswer
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const StatsCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(150, 36, 44, 0.1)',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  color: '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(150, 36, 44, 0.2)'
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.08)',
  marginBottom: '16px',
  background: '#ffffff',
  border: '1px solid rgba(150, 36, 44, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(150, 36, 44, 0.15)',
    border: '1px solid rgba(150, 36, 44, 0.2)'
  }
}));

const StatItem = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <Box sx={{ textAlign: 'center', px: 2 }}>
    <Avatar sx={{ 
      bgcolor: 'rgba(255, 255, 255, 0.2)', 
      color: '#fff',
      width: 50,
      height: 50,
      margin: '0 auto 8px'
    }}>
      {icon}
    </Avatar>
    <Typography variant="h6" fontWeight="bold" color="#fff">{value}</Typography>
    <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">{title}</Typography>
  </Box>
);

// Sample progress data
const progressData = [
  { name: 'Dush', bmi: 22.1, kaloriya: 1800 },
  { name: 'Sesh', bmi: 21.9, kaloriya: 1950 },
  { name: 'Chor', bmi: 21.7, kaloriya: 2100 },
  { name: 'Pay', bmi: 21.5, kaloriya: 2050 },
  { name: 'Jum', bmi: 21.3, kaloriya: 2200 },
  { name: 'Shan', bmi: 21.1, kaloriya: 2300 },
  { name: 'Yak', bmi: 20.9, kaloriya: 2150 },
];

const bmiCategories = [
  { range: "18.5 dan kam", label: "Kam vazn", description: "Sizning vazningiz bo'yingizga nisbatan kam. To'g'ri ovqatlanish va mashqlar bilan vazn oshirish tavsiya etiladi.", color: "#FFC107" },
  { range: "18.5 - 24.9", label: "Normal vazn", description: "Sizning vazn va bo'y nisbatingiz optimal darajada. Bu holatingizni saqlab qolish uchun muntazam mashq qiling va to'g'ri ovqatlaning.", color: "#4CAF50" },
  { range: "25 - 29.9", label: "Ortiqcha vazn", description: "Sizda ortiqcha vazn bor. Ushbu holat turli kasalliklar riskini oshirishi mumkin. Vazn yo'qotish uchun qo'shimcha choralar ko'rish tavsiya etiladi.", color: "#FF9800" },
  { range: "30 va undan ko'p", label: "Semizlik", description: "Sizda semizlik darajasidagi ortiqcha vazn bor. Mutaxassis bilan maslahatlashib, vazn yo'qotish dasturini boshlashingiz kerak.", color: "#F44336" }
];

const featureCards = [
  { 
    id: 1, 
    title: "Nazariy ma'lumotlar", 
    description: "Jismoniy rivojlanish haqida bilimlar",
    icon: <MenuBook sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/tab1"
  },
  { 
    id: 2, 
    title: "Sog'lom ayol kundaligi", 
    description: "Kundalik monitoring va kuzatuv",
    icon: <EventNote sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/tab5"
  },
  { 
    id: 3, 
    title: "FLOW-FIT texnologiyasi",  
    description: "Zamonaviy mashq tizimi",
    icon: <SelfImprovement sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/tab4"
  },
  { 
    id: 4, 
    title: "Tavsiyalar", 
    description: "Mutaxassis maslahlatlari",
    icon: <Psychology sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/tab6"
  },
  { 
    id: 5, 
    title: "Mening mashg'ulotlarim", 
    description: "Shaxsiy mashq dasturi",
    icon: <FitnessCenter sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/my-workouts"
  },
  { 
    id: 6, 
    title: "Menstruatsiya sikli kundaligim", 
    description: "Sikl monitoringi",
    icon: <Favorite sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/tab7"
  },
  { 
    id: 7, 
    title: "Savol javoblar", 
    description: "Ko'p so'raladigan savollar",
    icon: <QuestionAnswer sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/faq"
  },
  { 
    id: 8, 
    title: "Testlar", 
    description: "Bilimingizni sinab ko'ring", 
    icon: <Checklist sx={{ fontSize: 32 }} />,
    color: '#96242c',
    path: "/tests"
  },
];

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#96242c',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1,
        ease: "easeOut"
      }}
      style={{
        width: '120px',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          BMI
        </motion.div>
      </motion.div>
    </motion.div>
    
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      style={{ marginTop: '20px' }}
    >
      <Typography variant="h6" color="#fff" fontWeight="bold">
        Yuklanmoqda...
      </Typography>
    </motion.div>
  </motion.div>
);

const Home: React.FC = () => {
  const [weight, setWeight] = useState(() => {
    const savedWeight = localStorage.getItem('userWeight');
    return savedWeight || '';
  });
  const [height, setHeight] = useState(() => {
    const savedHeight = localStorage.getItem('userHeight');
    return savedHeight || '';
  });
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<any>(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (weight) {
      localStorage.setItem('userWeight', weight);
    }
  }, [weight]);

  useEffect(() => {
    if (height) {
      localStorage.setItem('userHeight', height);
    }
  }, [height]);

  useEffect(() => {
    const savedBmi = localStorage.getItem('userBmi');
    const savedBmiCategory = localStorage.getItem('userBmiCategory');
    
    if (savedBmi) {
      setBmi(parseFloat(savedBmi));
      setShowChart(true);
    }
    
    if (savedBmiCategory) {
      setBmiCategory(JSON.parse(savedBmiCategory));
      setExpanded(true);
    }
  }, []);

  const calculateBMI = () => {
    if (!weight || !height) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height) / 100;
      const calculatedBmi = weightNum / (heightNum * heightNum);
      const roundedBmi = parseFloat(calculatedBmi.toFixed(1));
      setBmi(roundedBmi);
      
      let category;
      if (roundedBmi < 18.5) {
        category = bmiCategories[0];
      } else if (roundedBmi < 25) {
        category = bmiCategories[1];
      } else if (roundedBmi < 30) {
        category = bmiCategories[2];
      } else {
        category = bmiCategories[3];
      }
      setBmiCategory(category);
      setLoading(false);
      setShowChart(true);

      localStorage.setItem('userBmi', roundedBmi.toString());
      localStorage.setItem('userBmiCategory', JSON.stringify(category));
    }, 1500);
  };

  useEffect(() => {
    if (bmi) {
      setExpanded(true);
    }
  }, [bmi]);

  const handleCardClick = (path: string) => {
    history.push(path);
  };

  if (isAppLoading) {
    return <LoadingScreen />;
  }

  return (
    <IonPage>
      <IonContent style={{ '--background': '#ffffff' }}>
        <Box sx={{ 
          padding: '24px 16px',
          maxWidth: '600px',
          margin: '0 auto',
          background: '#fff',
          minHeight: '100vh'
        }}>
          {/* Header with User Icon */}
          <motion.div {...fadeInUp}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" fontWeight="bold" color="#96242c">
                BMI Kalkulyatori
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <IonAvatar 
                  style={{ 
                    width: '70px', 
                    height: '70px', 
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'15px 18px',
                    background:'rgba(150, 36, 44, 0.1)'
                  }}
                  onClick={() => history.push('/tab3')}
                >
                  <PersonIcon style={{ color: '#96242c', fontSize: '1.5rem' }} />
                </IonAvatar>
              </motion.div>
            </Box>
          </motion.div>
          
          {/* BMI Calculator Section */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <StatsCard>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <motion.div {...scaleIn}>
                      <TextField
                        fullWidth
                        label="Vazn (kg)"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        InputProps={{
                          startAdornment: <WeightIcon sx={{ mr: 1, color: '#fff' }} />,
                          sx: { 
                            color: '#fff',
                            '& .MuiInputLabel-root': { color: '#fff' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                              '&.Mui-focused fieldset': { borderColor: '#fff' }
                            },
                            '& .MuiInputBase-input': { color: '#fff' }
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <motion.div {...scaleIn} transition={{ delay: 0.1 }}>
                      <TextField
                        fullWidth
                        label="Bo'y (sm)"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        InputProps={{
                          startAdornment: <HeightIcon sx={{ mr: 1, color: '#fff' }} />,
                          sx: { 
                            color: '#fff',
                            '& .MuiInputLabel-root': { color: '#fff' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                              '&.Mui-focused fieldset': { borderColor: '#fff' }
                            },
                            '& .MuiInputBase-input': { color: '#fff' }
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                </Grid>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <IonButton 
                    expand="block" 
                    onClick={calculateBMI}
                    disabled={loading}
                    style={{ 
                      marginTop: '16px',
                      borderRadius: '12px',
                      fontWeight: 'bold',
                      height: '48px',
                      backgroundColor: '#fff',
                      color: '#96242c',
                      '--background': '#fff',
                      '--color': '#96242c',
                      '--background-hover': '#f5f5f5'
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} style={{ color: '#96242c' }} />
                    ) : (
                      <>
                        <CalculateIcon sx={{ mr: 1, color: '#96242c' }} />
                        Hisoblash
                      </>
                    )}
                  </IonButton>
                </motion.div>
                
                <AnimatePresence>
                  {bmi && !loading && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ mt: 3 }}>
                        <Box sx={{ 
                          textAlign: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          p: 2,
                          borderLeft: `4px solid ${bmiCategory?.color || '#fff'}`
                        }}>
                          <Typography variant="h6" color="#fff">
                            Sizning BMI: <strong>{bmi}</strong>
                          </Typography>
                          <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold', color: bmiCategory?.color }}>
                            {bmiCategory?.label}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                            <motion.div whileHover={{ scale: 1.05 }}>
                              <IonButton 
                                size="small" 
                                fill="clear" 
                                onClick={() => setExpanded(!expanded)}
                                style={{ 
                                  fontSize: '0.8rem',
                                  color: '#fff',
                                  '--color': '#fff'
                                }}
                              >
                                {expanded ? 'Kamroq ko\'rsatish' : 'Batafsil ma\'lumot'} 
                                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                              </IonButton>
                            </motion.div>
                          </Box>
                          
                          <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Box sx={{ mt: 2, textAlign: 'left' }}>
                              <Typography variant="body2" color="#fff">
                                <strong>Normal diapazon:</strong> {bmiCategory?.range}
                              </Typography>
                              <Typography variant="body2" sx={{ mt: 1 }} color="rgba(255, 255, 255, 0.9)">
                                {bmiCategory?.description}
                              </Typography>
                            </Box>
                          </Collapse>
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </StatsCard>
          </motion.div>

          {/* Progress Chart */}
          <AnimatePresence>
            {showChart && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }} color="#96242c">
                    Haftalik Progress
                  </Typography>
                  <Card sx={{ 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 12px rgba(150, 36, 44, 0.1)',
                    border: '1px solid rgba(150, 36, 44, 0.1)'
                  }}>
                    <CardContent sx={{ height: '300px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={progressData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" />
                          <YAxis yAxisId="left" orientation="left" stroke="#96242c" />
                          <YAxis yAxisId="right" orientation="right" stroke="#fabdbc" />
                          <Tooltip />
                          <Legend />
                          <Line 
                            yAxisId="left" 
                            type="monotone" 
                            dataKey="bmi" 
                            stroke="#96242c" 
                            strokeWidth={2}
                            activeDot={{ r: 6 }} 
                            name="BMI" 
                          />
                          <Line 
                            yAxisId="right" 
                            type="monotone" 
                            dataKey="kaloriya" 
                            stroke="#fabdbc" 
                            strokeWidth={2}
                            activeDot={{ r: 6 }} 
                            name="Kaloriya" 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature Cards Section */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }} color="#96242c">
              Bo'limlar
            </Typography>

            <Grid container spacing={2}>
              {featureCards.map((card, index) => (
                <Grid item xs={12} sm={6} key={card.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FeatureCard onClick={() => handleCardClick(card.path)}>
                      <CardContent sx={{ 
                        padding: '20px',
                        textAlign: 'center',
                        '&:last-child': { pb: '20px' }
                      }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Avatar sx={{ 
                            bgcolor: 'rgba(150, 36, 44, 0.1)', 
                            color: '#96242c',
                            width: 60,
                            height: 60,
                            margin: '0 auto 12px',
                            border: '2px solid rgba(150, 36, 44, 0.2)'
                          }}>
                            {card.icon}
                          </Avatar>
                        </motion.div>
                        <Typography variant="h6" fontWeight="bold" color="#96242c" sx={{ mb: 1 }}>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="rgba(150, 36, 44, 0.7)" sx={{ lineHeight: 1.4 }}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;