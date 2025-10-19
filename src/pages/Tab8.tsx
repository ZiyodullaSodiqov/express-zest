import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  styled
} from "@mui/material";
import { IonContent } from "@ionic/react";
import {
  ArrowBack,
  History,
  Psychology,
  Favorite,
  MenuBook,
  AccessibilityNew,
  Straighten,
  ChildCare,
  OndemandVideo
} from "@mui/icons-material";

import Logo from '../images/logo.png'

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
  }
}));

const Tab8: React.FC = () => {
  const history = useHistory();

  const appFeatures = [
    { icon: <MenuBook color="primary" />, text: "Nazariy ma'lumotlar" },
    { icon: <History color="primary" />, text: "Ippoterapiya tarixi" },
    { icon: <Psychology color="primary" />, text: "Ippoterapiya inson organizmiga ta'siri" },
    { icon: <Favorite color="primary" />, text: "Ippoterapiya nima?" },
    { icon: <AccessibilityNew color="primary" />, text: "Ippoterapiya mashg'ulotlar qo'llanmasi" },
    { icon: <Straighten color="primary" />, text: "Insult" },
    { icon: <ChildCare color="primary" />, text: "Skolioz" },
    { icon: <AccessibilityNew color="primary" />, text: "Serebral falaj" },
    { icon: <OndemandVideo color="primary" />, text: "Ippoterapiya bo'yicha videolar" }
  ];

  return (
    <IonContent scrollY={true}>
      {/* Header with back button */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 2,
        background: 'linear-gradient(90deg, #1976d2 0%, #0d47a1 100%)',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <IconButton 
          onClick={() => history.goBack()} 
          sx={{ color: 'white', mr: 1 }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Mobil Ilova Haqida
        </Typography>
      </Box>

      {/* Main content */}
      <Box sx={{ 
        maxWidth: 800,
        mx: 'auto',
        p: 3
      }}>
        <InfoCard>
          <Typography variant="h5" sx={{ 
            fontWeight: 700,
            color: '#D81B60',
            mb: 2,
            textAlign: 'center'
          }}>
            "Ippoterapiya mashg'uloti orqali sog'lomlashtirish"
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
            Ushbu mobil ilova ippoterapiya sohasidagi barcha zarur ma'lumotlarni o'z ichiga oladi
          </Typography>
          
          <Avatar 
            src={Logo} 
            sx={{ 
              width: 120, 
              height: 120, 
              mx: 'auto',
              mb: 3,
              border: '4px solid #D81B60'
            }} 
          />
        </InfoCard>

        <InfoCard>
          <Typography variant="h6" sx={{ 
            fontWeight: 600,
            color: '#1976d2',
            mb: 2
          }}>
            Ilovada quyidagi ma'lumotlar mavjud:
          </Typography>
          
          <List>
            {appFeatures.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  {feature.icon}
                </ListItemIcon>
                <Typography variant="body1">
                  {feature.text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </InfoCard>

        <InfoCard>
          <Typography variant="body1" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
            "Ippoterapiya - bu nafaqat jismoniy, balki ruhiy sog'liqni yaxshilashning ajoyib usuli"
          </Typography>
        </InfoCard>
      </Box>
    </IonContent>
  );
};

export default Tab8;