import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled
} from '@mui/material';
import { 
  TrendingUp,
  Hearing,
  Tune,
  Waves,
  FitnessCenter,
  Flag,
  Analytics,
  Favorite,
  Psychology,
  SelfImprovement,
  Spa,
  Water,
  Air,
  Bedtime,
  EnergySavingsLeaf,
  MonitorHeart,
  Balance
} from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
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

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const MainCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  borderRadius: '24px',
  padding: '32px',
  marginBottom: '24px',
  boxShadow: '0 12px 40px rgba(150, 36, 44, 0.25)',
  color: '#fff',
  border: '3px solid rgba(250, 189, 188, 0.4)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 50px rgba(150, 36, 44, 0.35)'
  }
}));

const ClusterCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 248, 0.95) 100%)',
  borderRadius: '20px',
  padding: '24px',
  marginBottom: '20px',
  boxShadow: '0 8px 30px rgba(150, 36, 44, 0.15)',
  border: '2px solid rgba(250, 189, 188, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(150, 36, 44, 0.2)',
    border: '2px solid rgba(250, 189, 188, 0.5)'
  }
}));

const PhaseCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fabdbc 0%, #f8a5a5 100%)',
  borderRadius: '20px',
  padding: '24px',
  marginBottom: '20px',
  boxShadow: '0 8px 30px rgba(150, 36, 44, 0.15)',
  color: '#96242c',
  border: '2px solid rgba(150, 36, 44, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(150, 36, 44, 0.2)'
  }
}));

const ActivityCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '16px',
  padding: '20px',
  height: '100%',
  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.1)',
  border: '1px solid rgba(250, 189, 188, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(150, 36, 44, 0.15)'
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: '#fff',
  marginBottom: '24px',
  fontSize: '1.5rem',
  borderLeft: '6px solid #fabdbc',
  paddingLeft: '20px',
  textShadow: '0 2px 8px rgba(0,0,0,0.2)'
}));

const DarkSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: '#96242c',
  marginBottom: '24px',
  fontSize: '1.5rem',
  borderLeft: '6px solid #fabdbc',
  paddingLeft: '20px',
  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#96242c',
  marginBottom: '16px',
  fontSize: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));

const StyledTable = styled(TableContainer)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(150, 36, 44, 0.15)',
  marginBottom: '32px',
  border: '2px solid rgba(250, 189, 188, 0.3)',
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 248, 0.95) 100%)',
  '& .MuiTableHead-root': {
    background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  },
  '& .MuiTableCell-head': {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '16px',
    borderBottom: '2px solid rgba(250, 189, 188, 0.3)'
  },
  '& .MuiTableBody-root': {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 248, 0.95) 100%)',
  },
  '& .MuiTableCell-body': {
    color: '#96242c',
    borderBottom: '1px solid rgba(250, 189, 188, 0.2)',
    padding: '16px',
    fontWeight: 500
  },
  '& .MuiTableRow-root:hover': {
    backgroundColor: 'rgba(250, 189, 188, 0.1)'
  }
}));

const Tab4: React.FC = () => {
  const history = useHistory();

  const flowFitClusters = [
    {
      letter: "F",
      title: "Feedback (Teskari aloqa)",
      icon: <TrendingUp sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Pedagogik jarayon samaradorligi talaba-qizlarning o'z faoliyatini kuzatib borishi va natijalar haqida teskari ma'lumot bera olishiga bog'liq. Teskari aloqa orqali mashg'ulot mazmuni talabaning imkoniyatlariga moslashtiradi.",
      color: '#96242c'
    },
    {
      letter: "L",
      title: "Listen (Tananing ichki ovozini tinglash)",
      icon: <Hearing sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Talabalarning o'z holatini anglash, ichki signallarga e'tibor qaratishi shaxsiy rivojlanishning muhim omilidir. Bu yondashuv orqali talaba-qizlar o'z tanasini tushunishga o'rganadi.",
      color: '#96242c'
    },
    {
      letter: "O",
      title: "Optimize (Moslashtirish)",
      icon: <Tune sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Mashg'ulotlarni shaxsning individual fiziologik va psixologik xususiyatlariga muvofiqlashtirish. Bu jarayon nafaqat xavfsizlikni ta'minlaydi, balki shaxsiy imkoniyatlarning to'liq namoyon bo'lishiga ko'maklashadi.",
      color: '#96242c'
    },
    {
      letter: "W",
      title: "Wave (Yuklamani boshqarish)",
      icon: <Waves sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Yuklamani to'g'ri taqsimlash talabalarda mehnat va dam olishning uyg'unligini ta'minlaydi. Bu tamoyil jismoniy faollik bilan birga intizomlilik va iroda fazilatlarini shakllantirishga yordam beradi.",
      color: '#96242c'
    },
    {
      letter: "F",
      title: "Flex (Moslashuvchanlik)",
      icon: <FitnessCenter sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Mashg'ulotlarni qat'iy reja asosida emas, balki talaba ehtiyoji va sharoitidan kelib chiqib tashkil etish. Bu yondashuv talabalarda qiziqishning so'nib qolishini oldini oladi.",
      color: '#96242c'
    },
    {
      letter: "I",
      title: "Intend (Niyat va maqsad)",
      icon: <Flag sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Mashqlarni bajarishda ongli niyat va aniq maqsad qo'yish pedagogik jarayonning motivatsion komponentidir. Bu talaba-qizlarda o'z oldiga maqsad qo'yish malakasini tarbiyalaydi.",
      color: '#96242c'
    },
    {
      letter: "T",
      title: "Track (Monitoring)",
      icon: <Analytics sx={{ fontSize: 36, color: '#96242c' }} />,
      description: "Faoliyat jarayonini muntazam kuzatish va monitoring qilish talabalarda o'z-o'zini nazorat qilish, shaxsiy rivojlanish dinamikasini baholash malakasini shakllantiradi.",
      color: '#96242c'
    }
  ];

  const cycleRecommendations = [
    {
      bosqich: "Menstruatsiya",
      kun: "1–5",
      holat: "Past energiya",
      faoliyatlar: "Yengil yurish, limfadrenaj, pilates, nafas mashqlari",
      icon: <Psychology sx={{ color: '#96242c' }} />
    },
    {
      bosqich: "Follikulyar",
      kun: "6–13",
      holat: "Energiya ortadi",
      faoliyatlar: "Kardio, kuch, limfadrenaj, pilates, nafas mashqlari",
      icon: <TrendingUp sx={{ color: '#96242c' }} />
    },
    {
      bosqich: "Ovulyatsiya",
      kun: "14–16",
      holat: "Kuch-g'ayrat yuqori",
      faoliyatlar: "Yugurish, intensiv, limfadrenaj, pilates, nafas mashqlari",
      icon: <Favorite sx={{ color: '#96242c' }} />
    },
    {
      bosqich: "Luteal",
      kun: "17–28",
      holat: "Sekin pasayish",
      faoliyatlar: "Stretching, limfadrenaj, pilates, meditatsiya, nafas mashqlari",
      icon: <SelfImprovement sx={{ color: '#96242c' }} />
    }
  ];

  const phaseDetails = [
    {
      title: "1. Menstruatsiya bosqichi (1–5 kun)",
      icon: <Psychology sx={{ fontSize: 32, color: '#96242c' }} />,
      holat: "Past energiya, organizm tiklanish jarayonida, ba'zan og'riq va noqulayliklar bo'lishi mumkin. Bu bosqicha o'g'riqni yengillashtiradigan mashqlar ham yaxshi samara beradi.",
      activities: [
        {
          type: "Limfadrenaj",
          icon: <Water sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Bu bosqichda limfatik tizimning faoliyatini rag'batlantirish uchun yengil limfadrenaj mashqlari yordam beradi. Limfa suyuqligining harakati yaxshilanishi toksinlarni chiqarishga, shishlarni kamaytirishga yordam beradi."
        },
        {
          type: "Pilates",
          icon: <Balance sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Past intensivlikdagi pilates mashqlari, ayniqsa, tana holatini yaxshilash, bo'g'imlar va umurtqani qo'llab-quvvatlashga qaratilgan mashqlar tavsiya etiladi."
        },
        {
          type: "Nafas mashqlari",
          icon: <Air sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Chuqur va o'ylangan nafas olish mashqlari tanani tinchlantiradi, og'riqni kamaytiradi va stressni yengillashtiradi. Diafragmatik nafas olish organizmga kislorod ta'minotini oshiradi."
        }
      ]
    },
    {
      title: "2. Follikulyar bosqichi (6–13 kun)",
      icon: <TrendingUp sx={{ fontSize: 32, color: '#96242c' }} />,
      holat: "Energiya darajasi oshadi, organizm tiklanadi va faoliyatga tayyorlanadi.",
      activities: [
        {
          type: "Limfadrenaj",
          icon: <Water sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Limfa aylanishini qo'llab-quvvatlash uchun yengil va o'rtacha intensivlikdagi limfadrenaj mashqlari davom ettiriladi, tanani toksinlardan tozalash jarayoni davom etadi."
        },
        {
          type: "Pilates",
          icon: <Balance sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Mushaklar va holatni yaxshilash uchun ko'proq dinamik va kuchaytirilgan pilates mashqlari bajariladi. Bu bosqichda tana yanada harakatchan bo'ladi."
        },
        {
          type: "Nafas mashqlari",
          icon: <Air sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Yurak-qon tomir faoliyatini qo'llab-quvvatlash uchun chuqur nafas olish mashqlari muhim. Bu bosqichda nafas olish mashqlari qon aylanishini yaxshilaydi."
        }
      ]
    },
    {
      title: "3. Ovulyatsiya bosqichi (14–16 kun)",
      icon: <Favorite sx={{ fontSize: 32, color: '#96242c' }} />,
      holat: "Kuch-g'ayrat maksimal, organizm kuchli energiya bilan to'lgan.",
      activities: [
        {
          type: "Limfadrenaj",
          icon: <Water sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Ushbu bosqichda limfatik tizim faoliyatini maksimal darajada qo'llab-quvvatlash uchun o'rtacha yoki intensiv limfadreanja mashqlari amalga oshiriladi."
        },
        {
          type: "Pilates",
          icon: <Balance sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Mushaklarni mustahkamlash va koordinatsiyani oshirishga qaratilgan kuchli va dinamik pilates mashqlari tavsiya etiladi."
        },
        {
          type: "Nafas mashqlari",
          icon: <Air sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Nafas olish mashqlari stressni kamaytirish va organizmni maksimal darajada qo'llab-quvvatlashga qaratiladi."
        }
      ]
    },
    {
      title: "4. Luteal bosqichi (17–28 kun)",
      icon: <SelfImprovement sx={{ fontSize: 32, color: '#96242c' }} />,
      holat: "Energiya darajasi asta-sekin pasayadi, tana tiklanishga tayyorlanadi, ba'zida bezovtalik yoki charchoq kuchayishi mumkin.",
      activities: [
        {
          type: "Limfadrenaj",
          icon: <Water sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Shish va toksinlarni kamaytirish uchun yengil limfadreanja mashqlari foydali. Bu mashqlar tanani yengillashtiradi, og'riq va bezovtalikni kamaytiradi."
        },
        {
          type: "Pilates",
          icon: <Balance sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Past intensivlikdagi pilates mashqlari, ayniqsa cho'zish va bo'g'imlarni qo'llab-quvvatlashga qaratilgan mashqlar tavsiya etiladi."
        },
        {
          type: "Nafas mashqlari",
          icon: <Air sx={{ fontSize: 28, color: '#96242c' }} />,
          description: "Tinchlantiruvchi nafas mashqlari, meditatsiya bilan birgalikda, stressni kamaytirish va asab tizimini qo'llab-quvvatlash uchun zarur."
        }
      ]
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ 
          background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
          color: '#fff',
          boxShadow: '0 8px 30px rgba(150, 36, 44, 0.3)',
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
              FLOW-FIT Texnologiyasi
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
          {/* Main Introduction */}
          <motion.div {...fadeInUp}>
            <MainCard>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Favorite sx={{ fontSize: 48, color: '#fabdbc', mr: 3 }} />
                </motion.div>
                <Box>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 1 }}>
                    FLOW-FIT TEXNOLOGIYASI
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600 }}>
                    SIKLIK YONDASHUV ASOSIDA JISMONIY FAOLLIKNI BOSHQARISH
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ 
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify'
              }}>
                FLOW-FIT – bu talaba-qizlarning jismoniy faolligini hayz siklining fiziologik bosqichlariga mos holda tashkil etish va optimallashtirishga qaratilgan innovatsion yondashuv bo'lib, u tana signaliga sezgirlik, shaxsiy rejalashtirish va izchil monitoring asosida shakllantiriladi.
              </Typography>
            </MainCard>
          </motion.div>

          {/* FLOW-FIT Clusters */}
          <motion.div {...fadeInUp}>
            <DarkSectionTitle sx={{ mt: 6 }}>
              FLOW-FIT TEXNOLOGIYASINING KLASTERI
            </DarkSectionTitle>
            <Grid container spacing={3}>
              {flowFitClusters.map((cluster, index) => (
                <Grid item xs={12} md={6} key={cluster.letter}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <ClusterCard>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ 
                          background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
                          color: '#fff',
                          borderRadius: '14px',
                          width: '60px',
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '1.4rem',
                          mr: 3,
                          flexShrink: 0,
                          boxShadow: '0 4px 15px rgba(150, 36, 44, 0.3)'
                        }}>
                          {cluster.letter}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                            {cluster.icon}
                            <Typography variant="h6" fontWeight="bold" sx={{ color: '#96242c', ml: 1 }}>
                              {cluster.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: 'rgba(150, 36, 44, 0.85)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            {cluster.description}
                          </Typography>
                        </Box>
                      </Box>
                    </ClusterCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Cycle Recommendations Table */}
          <motion.div {...fadeInUp}>
            <SectionTitle sx={{ mt: 6 }}>
              SIKLIK MASHG'ULOT TAVSIYASI
            </SectionTitle>
            <StyledTable>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Bosqich</TableCell>
                    <TableCell>Kuni</TableCell>
                    <TableCell>Holat</TableCell>
                    <TableCell>Tavsiya etilgan faoliyatlar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cycleRecommendations.map((row, index) => (
                    <TableRow key={row.bosqich}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {row.icon}
                          <Typography fontWeight="700" sx={{ color: '#96242c' }}>
                            {row.bosqich}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="600" sx={{ color: '#96242c' }}>
                          {row.kun}
                        </Typography>
                      </TableCell>
                      <TableCell>{row.holat}</TableCell>
                      <TableCell>{row.faoliyatlar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTable>
          </motion.div>

          {/* Detailed Phase Information */}
          <motion.div {...fadeInUp}>
            <DarkSectionTitle sx={{ mt: 6 }}>
              BOSQICHLAR BO'YICHA BATAFSIL TAVSIYALAR
            </DarkSectionTitle>
            <Grid container spacing={4}>
              {phaseDetails.map((phase, index) => (
                <Grid item xs={12} key={phase.title}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <PhaseCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        {phase.icon}
                        <SubSectionTitle sx={{ color: '#96242c', ml: 2 }}>
                          {phase.title}
                        </SubSectionTitle>
                      </Box>
                      
                      <Box sx={{ 
                        background: 'rgba(255, 255, 255, 0.7)', 
                        borderRadius: '12px', 
                        padding: '16px',
                        mb: 3 
                      }}>
                        <Typography variant="body1" sx={{ 
                          color: 'rgba(150, 36, 44, 0.95)', 
                          lineHeight: 1.7,
                          fontStyle: 'italic',
                          fontWeight: 500
                        }}>
                          <strong>Holat:</strong> {phase.holat}
                        </Typography>
                      </Box>

                      <Grid container spacing={3}>
                        {phase.activities.map((activity, idx) => (
                          <Grid item xs={12} md={4} key={activity.type}>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <ActivityCard>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                  {activity.icon}
                                  <Typography variant="subtitle1" fontWeight="bold" sx={{ 
                                    color: '#96242c',
                                    ml: 1
                                  }}>
                                    {activity.type}
                                  </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ 
                                  color: 'rgba(150, 36, 44, 0.85)',
                                  lineHeight: 1.6
                                }}>
                                  {activity.description}
                                </Typography>
                              </ActivityCard>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                    </PhaseCard>
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

export default Tab4;