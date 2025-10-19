import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Chip
} from '@mui/material';
import { 
  WaterDrop,
  Bedtime,
  Air,
  Favorite,
  Security,
  Warning,
  FitnessCenter,
  SelfImprovement,
  Psychology,
  Balance,
  MonitorHeart,
  Spa,
  LocalHospital,
  HealthAndSafety,
  Calculate,
  Schedule,
  Thermostat
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
      staggerChildren: 0.15
    }
  }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 30 },
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
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
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
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #fabdbc, #fff, #fabdbc)',
    animation: 'shimmer 3s infinite'
  }
}));

const SectionCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.9) 100%)',
  borderRadius: '24px',
  padding: '28px',
  marginBottom: '24px',
  boxShadow: '0 12px 40px rgba(150, 36, 44, 0.15)',
  border: '2px solid rgba(250, 189, 188, 0.3)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 25px 60px rgba(150, 36, 44, 0.25)',
    border: '2px solid rgba(250, 189, 188, 0.6)'
  }
}));

const SafetyCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fabdbc 0%, #f8a5a5 100%)',
  borderRadius: '22px',
  padding: '24px',
  marginBottom: '20px',
  boxShadow: '0 10px 35px rgba(150, 36, 44, 0.2)',
  color: '#96242c',
  border: '2px solid rgba(150, 36, 44, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 45px rgba(150, 36, 44, 0.3)'
  }
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

const DarkSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: '#96242c',
  marginBottom: '28px',
  fontSize: '1.8rem',
  borderLeft: '6px solid #fabdbc',
  paddingLeft: '20px',
  textShadow: '0 2px 8px rgba(0,0,0,0.1)'
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#96242c',
  marginBottom: '20px',
  fontSize: '1.3rem',
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));

const SafetySubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#96242c',
  marginBottom: '16px',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

const AnimatedIcon = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

// Types for better type safety
interface SectionDetails {
  dailyRequirement?: string;
  factors?: string[];
  calculation?: {
    formula: string;
    example: string;
  };
  recommendation?: string;
  tips?: string[];
  technique?: string;
  benefits?: string[];
  flexibility?: {
    types: string[];
    recommendation: string;
  };
}

interface Section {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: string;
  details?: SectionDetails;
}

const Tab6: React.FC = () => {
  const history = useHistory();

  const sections: Section[] = [
    {
      id: 1,
      title: "Suv Balansi",
      icon: <WaterDrop sx={{ fontSize: 36, color: '#96242c' }} />,
      content: `Suv tana funksiyalarini bajarishda muhim oziq-ovqat moddasi sifatida ishlaydi va bir qator muhim jarayonlarda asosiy ro'lni o'ynaydi. Suv toksinlarni buyraklar orqali chiqarishda yordam beradi va organizmdagi barcha hujayralar va to'qimalar uchun muhim bo'lgan moddalar almashinuvi jarayonlarini qo'llab-quvvatlaydi.`,
      details: {
        dailyRequirement: "Kuniga 1.5-2 litr suv ichish toksinlarni samarali chiqarish uchun yetarli.",
        factors: [
          "Jismoniy faollik darajasi",
          "Umumiy salomatlik holati",
          "Vazn",
          "Iqlim sharoitlari",
          "Maxsus davrlar (homiladorlik va emizish)"
        ],
        calculation: {
          formula: "Bir kilogramm vaznga 20-40 ml",
          example: "58 kg × 40 ml = 2320 ml (kunlik suv miqdori)"
        }
      }
    },
    {
      id: 2,
      title: "Uyqu Balansi",
      icon: <Bedtime sx={{ fontSize: 36, color: '#96242c' }} />,
      content: `Uyqu — inson va hayvonlarda ma'lum vaqtda takrorlanib turadigan tabiiy fiziologik holat bo'lib, bu davrda tanadagi biologik jarayonlar nisbatan sekinlashadi. Shu orqali organizm, ayniqsa markaziy asab tizimi, o'z kuchini tiklash va faoliyatini qayta tiklash uchun qulay muhitga ega bo'ladi.`,
      details: {
        recommendation: "18-25 yosh oralig'idagi yoshlarga 7-9 soat uyqu tavsiya etiladi.",
        tips: [
          "Har kuni bir vaqtda uxlash va uyg'onishga odatlaning",
          "Uyqu oldidan kofein, telefon, televizordan voz keching",
          "Yotoq xonani sokin, qorong'i va salqin tuting",
          "Yengil kechki ovqat, meditatsiya yoki issiq dush qabul qiling"
        ]
      }
    },
    {
      id: 3,
      title: "Nafas Mashqlari Texnikasi",
      icon: <Air sx={{ fontSize: 36, color: '#96242c' }} />,
      content: `Nafasingizni nazorat qiling va o'z nafasingizga moslashing. "Lateral nafas olish" tushunchasi nafas olish jarayonida qovurg'alarining yon va orqa tomonlariga e'tibor qaratish talab etiladi.`,
      details: {
        technique: `O'z nafasiga moslashish shunchaki nafas olishga e'tibor berish va uni his qilishdir. Masalan: Yotganingizda, o'tirganingizda yoki turganingizda nafas olishingiz qanday o'zgaradi? Nafas olayotganda tanangizda qanday sezgilarni his qilasiz?`,
        benefits: [
          "Tananing tabiiy ritmini kuzatish",
          "O'z his-tuyg'ularingizni tushunish",
          "Stressni kamaytirish",
          "Konsentratsiyani oshirish"
        ]
      }
    },
    {
      id: 4,
      title: "Ayollar Jarohati va Xavfsizlik Masalalari",
      icon: <HealthAndSafety sx={{ fontSize: 36, color: '#96242c' }} />,
      content: `Moslashuvchanlik va jarohatlarning oldini olish. Shikastlanish xavfini kamaytirish vositasi sifatida moslashuvchanlikni muhim ahamiyat kasb etadi. Mashqlarga moslashish ma'lum vaqtni o'z ichiga oladi.`,
      details: {
        flexibility: {
          types: [
            "Statik cho'zish - mashqdan oldin va keyin",
            "Dinamik cho'zish - mashqdan oldin"
          ],
          recommendation: "Mashqdan oldin statik va dinamik cho'zishni birlashtirish maqsadga muvofiq"
        }
      }
    }
  ];

  const safetyGuidelines = [
    {
      category: "Limfodrenaj Mashqlari",
      icon: <WaterDrop sx={{ fontSize: 30, color: '#96242c' }} />,
      description: "Limfa tizimi organizmda moddalar almashinuvi mahsulotlarini chiqarishda, immunitetni mustahkamlashda va shishlarni kamaytirishda muhim rol o'ynaydi.",
      safety: [
        "Mashqlarni yumshoq, sekin va ritmik bajarish lozim",
        "Har bir mashqdan oldin va keyin to'g'ri nafas olish elementlarini qo'shish zarur",
        "Qattiq bosim, keskin sakrash yoki zo'r beruvchi mashqlardan qochish tavsiya etiladi"
      ],
      prevention: [
        "Limfodrenaj mashqlarida mushak va bo'g'imlarga ortiqcha yuk tushmasligi kerak",
        "Mashqlarni qulay holatda (o'tirgan yoki yotgan holda) bajarish maqsadga muvofiq",
        "Oyoq-qo'llarda noqulaylik yoki zo'riqish sezilsa, mashqni to'xtatish zarur"
      ]
    },
    {
      category: "Pilates Mashqlari",
      icon: <Balance sx={{ fontSize: 30, color: '#96242c' }} />,
      description: "Pilates mashqlari asosan yadro mushaklarini mustahkamlashga, qaddi-qomatni to'g'rilashga, muvozanat va koordinatsiyani rivojlantirishga qaratilgan.",
      safety: [
        "Mashqlarni isish (warm-up) bilan boshlash zarur",
        "Harakatlarni keskin emas, balki boshqarilgan va ongli tarzda bajarish",
        "To'g'ri nafas olish texnikasiga amal qilish",
        "Orqa va bel mushaklariga haddan tashqari zo'riqish bermaslik"
      ],
      prevention: [
        "Boshlang'ich bosqichda faqat tana vazniga asoslangan mashqlardan foydalanish",
        "Yadro mushaklarini mustahkamlashni bosqichma-bosqich amalga oshirish",
        "Oyoq, qo'l va bo'g'imlarga yuk beruvchi mashqlarda to'g'ri texnikani saqlash"
      ]
    },
    {
      category: "Nafas Mashqlari",
      icon: <Air sx={{ fontSize: 30, color: '#96242c' }} />,
      description: "Nafas mashqlari organizmning kislorod bilan ta'minlanishini oshiradi, markaziy asab tizimini tinchlantiradi, stressni kamaytiradi va mashqlar samaradorligini kuchaytiradi.",
      safety: [
        "Nafasni sekin va tabiiy usulda boshqarish",
        "Diafragmal nafas olishni asosiy metod sifatida qo'llash",
        "Mashqlar vaqtida bosh aylanishi yoki noqulaylik sezilganda darhol to'xtatish"
      ],
      prevention: [
        "Nafasni majburan ushlab qolmaslik",
        "Mashqlarni toza havoda yoki yaxshi shamollatilgan xonada bajarish",
        "Mashg'ulotlarni dastlab 5–10 daqiqadan boshlash, keyinchalik asta-sekin oshirish"
      ]
    }
  ];

  // Helper function to render section details safely
  const renderSectionDetails = (section: Section) => {
    if (!section.details) return null;

    switch (section.id) {
      case 1:
        return (
          <Box>
            {section.details.dailyRequirement && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Chip 
                  icon={<Thermostat />} 
                  label={section.details.dailyRequirement}
                  sx={{ 
                    background: 'linear-gradient(135deg, #fabdbc, #f8a5a5)',
                    color: '#96242c',
                    fontWeight: 600,
                    mb: 2
                  }}
                />
              </motion.div>
            )}
            
            {section.details.factors && (
              <>
                <SafetySubtitle>
                  <Psychology sx={{ fontSize: 26 }} />
                  Omillar:
                </SafetySubtitle>
                <List dense>
                  {section.details.factors.map((factor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.6 }}
                    >
                      <ListItem>
                        <ListItemIcon>
                          <FitnessCenter sx={{ fontSize: 22, color: '#96242c' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={factor} 
                          primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </>
            )}

            {section.details.calculation && (
              <>
                <SafetySubtitle sx={{ mt: 3 }}>
                  <Calculate sx={{ fontSize: 26 }} />
                  Hisoblash formulasi:
                </SafetySubtitle>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Typography variant="body2" sx={{ 
                    color: 'rgba(150, 36, 44, 0.8)', 
                    mb: 1,
                    fontSize: '1rem'
                  }}>
                    {section.details.calculation.formula}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#96242c', 
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '1.1rem'
                  }}>
                    {section.details.calculation.example}
                  </Typography>
                </motion.div>
              </>
            )}
          </Box>
        );

      case 2:
        return (
          <Box>
            {section.details.recommendation && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Chip 
                  icon={<Schedule />} 
                  label={section.details.recommendation}
                  sx={{ 
                    background: 'linear-gradient(135deg, #fabdbc, #f8a5a5)',
                    color: '#96242c',
                    fontWeight: 600,
                    mb: 2
                  }}
                />
              </motion.div>
            )}
            
            {section.details.tips && (
              <>
                <SafetySubtitle>
                  <Spa sx={{ fontSize: 26 }} />
                  Sifatli uyqu uchun tavsiyalar:
                </SafetySubtitle>
                <List dense>
                  {section.details.tips.map((tip, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.6 }}
                    >
                      <ListItem>
                        <ListItemIcon>
                          <Bedtime sx={{ fontSize: 22, color: '#96242c' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={tip} 
                          primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </>
            )}
          </Box>
        );

      case 3:
        return (
          <Box>
            {section.details.technique && (
              <>
                <SafetySubtitle>
                  <SelfImprovement sx={{ fontSize: 26 }} />
                  Texnika:
                </SafetySubtitle>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(150, 36, 44, 0.8)', 
                  lineHeight: 1.7,
                  mb: 3,
                  fontSize: '1rem'
                }}>
                  {section.details.technique}
                </Typography>
              </>
            )}

            {section.details.benefits && (
              <>
                <SafetySubtitle>
                  <MonitorHeart sx={{ fontSize: 26 }} />
                  Foydalari:
                </SafetySubtitle>
                <List dense>
                  {section.details.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.6 }}
                    >
                      <ListItem>
                        <ListItemIcon>
                          <Favorite sx={{ fontSize: 22, color: '#96242c' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit} 
                          primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </>
            )}
          </Box>
        );

      case 4:
        return (
          <Box>
            {section.details.flexibility && (
              <>
                <SafetySubtitle>
                  <FitnessCenter sx={{ fontSize: 26 }} />
                  Moslashuvchanlik turlari:
                </SafetySubtitle>
                <List dense sx={{ mb: 3 }}>
                  {section.details.flexibility.types.map((type, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.6 }}
                    >
                      <ListItem>
                        <ListItemIcon>
                          <Balance sx={{ fontSize: 22, color: '#96242c' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={type} 
                          primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Typography variant="body2" sx={{ 
                    color: '#96242c', 
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '1.1rem'
                  }}>
                    {section.details.flexibility.recommendation}
                  </Typography>
                </motion.div>
              </>
            )}
          </Box>
        );

      default:
        return null;
    }
  };

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
              Sog'lom Turmush Tarzi
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
                <AnimatedIcon
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Favorite sx={{ fontSize: 56, color: '#fabdbc', mr: 3 }} />
                </AnimatedIcon>
                <Box>
                  <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 1 }}>
                    Sog'lom Turmush Tarzi Asoslari
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600 }}>
                    Talaba-qizlar uchun muhim qo'llanma
                  </Typography>
                </Box>
              </Box>
              
              {/* Floating Elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(250, 189, 188, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                {...floatingAnimation}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '100px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                }}
                {...pulseAnimation}
              />
            </MainCard>
          </motion.div>

          {/* Main Sections */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Grid container spacing={4}>
              {sections.map((section, index) => (
                <Grid item xs={12} md={6} key={section.id}>
                  <motion.div
                    variants={cardAnimation}
                    whileHover={{ scale: 1.03 }}
                  >
                    <SectionCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <AnimatedIcon {...pulseAnimation}>
                          {section.icon}
                        </AnimatedIcon>
                        <SubSectionTitle>
                          {section.title}
                        </SubSectionTitle>
                      </Box>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Typography variant="body1" sx={{ 
                          color: 'rgba(150, 36, 44, 0.9)', 
                          lineHeight: 1.8,
                          mb: 3,
                          fontSize: '1.05rem'
                        }}>
                          {section.content}
                        </Typography>

                        {/* Render section details safely */}
                        {renderSectionDetails(section)}
                      </motion.div>
                    </SectionCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Safety Guidelines Section */}
          <motion.div {...fadeInUp}>
            <DarkSectionTitle sx={{ mt: 8 }}>
              Xavfsizlik Ko'rsatmalari va Jarohatlarning Oldini Olish
            </DarkSectionTitle>
            
            <Grid container spacing={4}>
              {safetyGuidelines.map((guideline, index) => (
                <Grid item xs={12} md={4} key={guideline.category}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafetyCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <AnimatedIcon {...floatingAnimation}>
                          {guideline.icon}
                        </AnimatedIcon>
                        <Typography variant="h6" fontWeight="bold" sx={{ ml: 2, color: '#96242c' }}>
                          {guideline.category}
                        </Typography>
                      </Box>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <Typography variant="body2" sx={{ 
                          color: 'rgba(150, 36, 44, 0.9)', 
                          lineHeight: 1.7,
                          mb: 3,
                          fontSize: '1rem'
                        }}>
                          {guideline.description}
                        </Typography>

                        <SafetySubtitle>
                          <Security sx={{ fontSize: 24 }} />
                          Xavfsizlik jihatlari:
                        </SafetySubtitle>
                        <List dense sx={{ mb: 3 }}>
                          {guideline.safety.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + 0.5 }}
                            >
                              <ListItem sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <Warning sx={{ fontSize: 20, color: '#96242c' }} />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={item} 
                                  primaryTypographyProps={{ fontSize: '0.95rem' }}
                                />
                              </ListItem>
                            </motion.div>
                          ))}
                        </List>

                        <SafetySubtitle>
                          <LocalHospital sx={{ fontSize: 24 }} />
                          Jarohatlarning oldini olish:
                        </SafetySubtitle>
                        <List dense>
                          {guideline.prevention.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + 0.7 }}
                            >
                              <ListItem sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <HealthAndSafety sx={{ fontSize: 20, color: '#96242c' }} />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={item} 
                                  primaryTypographyProps={{ fontSize: '0.95rem' }}
                                />
                              </ListItem>
                            </motion.div>
                          ))}
                        </List>
                      </motion.div>
                    </SafetyCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Background Decorative Elements */}
          <motion.div
            style={{
              position: 'fixed',
              top: '50%',
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

export default Tab6;