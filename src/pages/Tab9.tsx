import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  styled,
  Grid
} from "@mui/material";
import Founder from '../images/founder.jpg'
import { IonContent } from "@ionic/react";
import { ArrowBack } from "@mui/icons-material";

const ProfileCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
}));

const ExperienceItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  '& .years': {
    minWidth: '120px',
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  '& .position': {
    fontWeight: '500'
  }
}));

const Tab9: React.FC = () => {
  const history = useHistory();

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
          Ma'lumotnoma
        </Typography>
      </Box>

      {/* Main content */}
      <Box sx={{ 
        maxWidth: 800,
        mx: 'auto',
        p: 3
      }}>
        {/* Personal Info Card */}
        <ProfileCard>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar 
            src={Founder}
              sx={{ 
                width: 100, 
                height: 100, 
                mr: 3,
                fontSize: '2.5rem',
                bgcolor: '#D81B60'
              }}
            >
              
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Ibodullayev Daston Rashidovich
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Kichik ilmiy xodim
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText 
                  primary="Tug'ilgan yili:" 
                  secondary="02.02.1995" 
                  secondaryTypographyProps={{ fontWeight: '500' }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText 
                  primary="Tug'ilgan joyi:" 
                  secondary="Xorazm viloyati, Shovot tumani" 
                  secondaryTypographyProps={{ fontWeight: '500' }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText 
                  primary="Millati:" 
                  secondary="O'zbek" 
                  secondaryTypographyProps={{ fontWeight: '500' }}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText 
                  primary="Ma'lumoti:" 
                  secondary="Oliy" 
                  secondaryTypographyProps={{ fontWeight: '500' }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText 
                  primary="Tamomlagan:" 
                  secondary="Urganch Davlat universiteti (2020)" 
                  secondaryTypographyProps={{ fontWeight: '500' }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText 
                  primary="Mutaxassisligi:" 
                  secondary="Sport faoliyati" 
                  secondaryTypographyProps={{ fontWeight: '500' }}
                />
              </ListItem>
            </Grid>
          </Grid>
        </ProfileCard>

        {/* Work Experience */}
        <ProfileCard>
          <Typography variant="h6" sx={{ 
            fontWeight: 600,
            color: '#1976d2',
            mb: 3
          }}>
            Mehnat Faoliyati
          </Typography>

          <ExperienceItem>
            <Typography className="years">2025 - hozirgacha</Typography>
            <Box sx={{ ml: 2 }}>
              <Typography className="position">
                JTSITI Olimpiya va paralimpiya sport turlarini tahlil etish va pronozlashtirish laboratoriyasi kichik ilmiy xodimi
              </Typography>
            </Box>
          </ExperienceItem>

          <Divider sx={{ my: 2 }} />

          <ExperienceItem>
            <Typography className="years">2024 yil</Typography>
            <Box sx={{ ml: 2 }}>
              <Typography className="position">
                Jismoniy tarbiya va sport ilmiy tadqiqotlar instituti Xalqaro aloqalarni rivojlantirish bo'limi mutaxassisi
              </Typography>
            </Box>
          </ExperienceItem>

          <ExperienceItem>
            <Typography className="years">2023 - 2024 y.</Typography>
            <Box sx={{ ml: 2 }}>
              <Typography className="position">
                Toshkent iqtisodiyot va pedagogika instituti Ijtimoiy fanlar fakulteti o'qituvchisi
              </Typography>
            </Box>
          </ExperienceItem>

          <ExperienceItem>
            <Typography className="years">2022 - 2023 y.</Typography>
            <Box sx={{ ml: 2 }}>
              <Typography className="position">
                O'zDJTSU Murakkab texnik-sport turlari nazariyasi va uslubiyati kafedrasi o'qituvchisi
              </Typography>
            </Box>
          </ExperienceItem>

          {/* Add more experience items following the same pattern */}
          
        </ProfileCard>

        {/* Additional Information */}
        <ProfileCard>
          <Typography variant="h6" sx={{ 
            fontWeight: 600,
            color: '#1976d2',
            mb: 2
          }}>
            Qo'shimcha Ma'lumotlar
          </Typography>

          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary="Cheg tillari:" 
              secondary="Turk tili, Rus tili (lug'at yordamida)" 
              secondaryTypographyProps={{ fontWeight: '500' }}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary="Partiyaviyligi:" 
              secondary="O'zLiDeP" 
              secondaryTypographyProps={{ fontWeight: '500' }}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary="Davlat mukofotlari:" 
              secondary="Yo'q" 
              secondaryTypographyProps={{ fontWeight: '500' }}
            />
          </ListItem>
        </ProfileCard>
      </Box>
    </IonContent>
  );
};

export default Tab9;