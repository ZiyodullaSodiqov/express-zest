import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  styled
} from '@mui/material';
import { 
  School,
  Psychology,
  Group,
  Favorite,
  FitnessCenter,
  Restaurant,
  Bedtime,
  FamilyRestroom,
  Biotech,
  SelfImprovement,
  Assessment,
  TrendingUp,
  Lightbulb,
  EmojiPeople,
  MenuBook,
  CheckCircle
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

const ProcessCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  borderRadius: '20px',
  padding: '24px',
  marginBottom: '20px',
  boxShadow: '0 8px 32px rgba(150, 36, 44, 0.15)',
  color: '#fff',
  border: '2px solid rgba(250, 189, 188, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(150, 36, 44, 0.25)'
  }
}));

const ComponentCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '16px',
  padding: '20px',
  marginBottom: '16px',
  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.1)',
  border: '1px solid rgba(150, 36, 44, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(150, 36, 44, 0.15)'
  }
}));

const ApproachCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fabdbc 0%, #f8a5a5 100%)',
  borderRadius: '16px',
  padding: '20px',
  marginBottom: '16px',
  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.1)',
  color: '#96242c',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(150, 36, 44, 0.2)'
  }
}));

const FactorCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  padding: '20px',
  marginBottom: '16px',
  boxShadow: '0 4px 20px rgba(150, 36, 44, 0.08)',
  border: '1px solid rgba(150, 36, 44, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(150, 36, 44, 0.12)'
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#96242c',
  marginBottom: '20px',
  fontSize: '1.4rem',
  borderLeft: '4px solid #fabdbc',
  paddingLeft: '16px',
  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#96242c',
  marginBottom: '16px',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const Tab5: React.FC = () => {
  const history = useHistory();

  const processBlocks = [
    {
      title: "Jarayonli blok",
      icon: <TrendingUp sx={{ fontSize: 32, color: '#fabdbc' }} />,
      items: [
        "sog'lom turmush tarziga oid nazariy bilimlar va tushunchalar",
        "Talaba-qizlarda sog'lom turmush tarzi kompetensiyalari takomillashtirilib, bilim, ko'nikma va xulq-atvorini amaliyotda qo'llay oladigan kompetent shaxsga aylanadi.",
        "O'qitish usullari: mini ma'ruzalar, suhbatlar, treninglar",
        "Ta'lim shakllari: darsdan tashqari mashg'ulotlar"
      ]
    },
    {
      title: "Natijaviy blok",
      icon: <Assessment sx={{ fontSize: 32, color: '#fabdbc' }} />,
      items: [
        "Talaba-qizlarda sog'lom turmush tarzi kompetensiyalari takomillashtirilib, bilim, ko'nikma va xulq-atvorini amaliyotda qo'llay oladigan kompetent shaxsga aylanadi."
      ]
    },
    {
      title: "Maqsadli blok",
      icon: <CheckCircle sx={{ fontSize: 32, color: '#fabdbc' }} />,
      items: [
        "Maqsad: talaba-qizlarning sog'lom turmush tarzi kompetensiyalarini takomillashtish",
        "Vazifalar: talaba-qizlarda sog'lom turmush tarziga oid bilim, ko'nikma, malaka va qadriyatlarni rivojlantirish hamda ularni amaliy faoliyatda qo'llashga yo'naltirish."
      ]
    }
  ];

  const components = [
    {
      title: "Kognitiv",
      icon: <Psychology sx={{ fontSize: 28, color: '#96242c' }} />,
      description: "sog'lom turmush tarziga oid nazariy bilimlar va tushunchalar"
    },
    {
      title: "Aksiologik",
      icon: <Lightbulb sx={{ fontSize: 28, color: '#96242c' }} />,
      description: "sog'liqni qadriyat sifatida anglash va unga ijobiy munosabat"
    },
    {
      title: "Refleksiv",
      icon: <SelfImprovement sx={{ fontSize: 28, color: '#96242c' }} />,
      description: "o'z sog'ligini baholash, nazorat qilish"
    },
    {
      title: "Faoliyatli",
      icon: <EmojiPeople sx={{ fontSize: 28, color: '#96242c' }} />,
      description: "bilimlarni amaliyotda qo'llash, sog'lom odatlarni shakllantirish"
    }
  ];

  const approaches = [
    {
      title: "shaxsga yo'naltirilgan",
      icon: <Group sx={{ fontSize: 28 }} />
    },
    {
      title: "tizimli",
      icon: <MenuBook sx={{ fontSize: 28 }} />
    },
    {
      title: "sog'lomlashtiruvchi",
      icon: <Favorite sx={{ fontSize: 28 }} />
    },
    {
      title: "innavatsion",
      icon: <Biotech sx={{ fontSize: 28 }} />
    }
  ];

  const factors = [
    {
      title: "Jismoniy faollik va sog'lom ovqatlanish odatlari",
      icon: <FitnessCenter sx={{ fontSize: 28, color: '#96242c' }} />,
      items: [
        "doimiy jismoniy mashqlar",
        "balanslangan ovqatlanish",
        "sog'lom uyqu tartibi"
      ]
    },
    {
      title: "Ijtimoiy-madaniy omillar",
      icon: <FamilyRestroom sx={{ fontSize: 28, color: '#96242c' }} />,
      items: [
        "oila va yaqin atrofdagilarning qo'llab-quvvatlashi",
        "universitet muhiti"
      ]
    },
    {
      title: "Biologik va fiziologik omillar",
      icon: <Biotech sx={{ fontSize: 28, color: '#96242c' }} />,
      items: [
        "organizmning yoshga doir o'zgarishlari",
        "menstruatsion sikl"
      ]
    }
  ];

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
              Ta'lim Modeli
            </IonTitle>
          </motion.div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen style={{ 
        '--background': 'linear-gradient(135deg, #f8fafc 0%, #e9ecef 100%)',
        padding: '16px'
      }}>
        <Box sx={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '8px'
        }}>
          {/* Process Blocks Section */}
          <motion.div {...fadeInUp}>
            <SectionTitle>
              Ta'lim Jarayoni Bloklari
            </SectionTitle>
            <Grid container spacing={3}>
              {processBlocks.map((block, index) => (
                <Grid item xs={12} md={4} key={block.title}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProcessCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {block.icon}
                        <Typography variant="h6" fontWeight="bold" sx={{ ml: 2, color: '#fff' }}>
                          {block.title}
                        </Typography>
                      </Box>
                      <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                        {block.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                          >
                            <Typography variant="body2" sx={{ 
                              color: 'rgba(255, 255, 255, 0.9)', 
                              lineHeight: 1.6,
                              mb: 1
                            }}>
                              {item}
                            </Typography>
                          </motion.li>
                        ))}
                      </Box>
                    </ProcessCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Components Section */}
          <motion.div {...fadeInUp}>
            <SectionTitle sx={{ mt: 4 }}>
              Komponentlar
            </SectionTitle>
            <Grid container spacing={3}>
              {components.map((component, index) => (
                <Grid item xs={12} sm={6} md={3} key={component.title}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ComponentCard>
                      <Box sx={{ textAlign: 'center' }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {component.icon}
                        </motion.div>
                        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1, mb: 1, color: '#96242c' }}>
                          {component.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(150, 36, 44, 0.8)', lineHeight: 1.5 }}>
                          {component.description}
                        </Typography>
                      </Box>
                    </ComponentCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Approaches Section */}
          <motion.div {...fadeInUp}>
            <SectionTitle sx={{ mt: 4 }}>
              Uslubiy Yondashuvlar
            </SectionTitle>
            <Grid container spacing={2}>
              {approaches.map((approach, index) => (
                <Grid item xs={12} sm={6} md={3} key={approach.title}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ApproachCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {approach.icon}
                        </motion.div>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1, color: '#96242c' }}>
                          {approach.title}
                        </Typography>
                      </Box>
                    </ApproachCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Factors Section */}
          <motion.div {...fadeInUp}>
            <SectionTitle sx={{ mt: 4 }}>
              Sog'lom Turmush Tarzini Shakllantirishga Yo'naltiruvchi Omillar
            </SectionTitle>
            <Grid container spacing={3}>
              {factors.map((factor, index) => (
                <Grid item xs={12} md={4} key={factor.title}>
                  <motion.div
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FactorCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {factor.icon}
                        <SubSectionTitle>
                          {factor.title}
                        </SubSectionTitle>
                      </Box>
                      <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                        {factor.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                          >
                            <Typography variant="body2" sx={{ 
                              color: 'rgba(150, 36, 44, 0.8)', 
                              lineHeight: 1.6,
                              mb: 1
                            }}>
                              {item}
                            </Typography>
                          </motion.li>
                        ))}
                      </Box>
                    </FactorCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000
            }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #96242c 0%, #fabdbc 100%)',
                opacity: 0.1
              }}
            />
          </motion.div>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;