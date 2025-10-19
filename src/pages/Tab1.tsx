import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Divider,
  styled
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
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
      staggerChildren: 0.2
    }
  }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const TheoryCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #96242c 0%, #7a1d24 100%)',
  borderRadius: '20px',
  padding: '28px',
  marginBottom: '24px',
  boxShadow: '0 8px 32px rgba(150, 36, 44, 0.15)',
  color: '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(150, 36, 44, 0.25)'
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#fff',
  marginBottom: '20px',
  fontSize: '1.4rem',
  borderLeft: '4px solid #fabdbc',
  paddingLeft: '16px',
  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  lineHeight: 1.4
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '12px !important',
  marginBottom: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: '0 0 16px 0'
  }
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '12px',
  color: '#fff',
  fontWeight: 600,
  minHeight: '64px !important',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#fabdbc'
  },
  '&.Mui-expanded': {
    minHeight: '64px !important',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  }
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '0 0 12px 12px',
  padding: '28px',
  color: 'rgba(255, 255, 255, 0.95)'
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.95)',
  lineHeight: 1.8,
  textAlign: 'justify',
  marginBottom: '20px',
  fontSize: '0.95rem'
}));

const ListItem = styled('li')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.95)',
  lineHeight: 1.8,
  marginBottom: '8px',
  fontSize: '0.95rem'
}));

const Tab1: React.FC = () => {
  const history = useHistory();

  const theorySections = [
    {
      id: 1,
      title: "Talaba-qizlarning jismoniy rivojlanishi va funksional holati xususiyatlari",
      content: `Shaxsning barkamol rivojlanishga organizmni atrof muhit bilan hamkorligi oqibatida erishiladi. O'sish deganda to'qimalar, a'zolar va umuman tana massasini ortishi tushunilib, u, odam tanasi kattaligi va shaklini mos ravishdagi o'zgarishlari bilan belgilanadi.`,
      details: `
        Barcha to'qimalar o'sadi, lekin ushbu jadalligi inson hayotining alohida davrlarida turlicha hamda alohida to'qimalar a'zolar va tizimlar uchun bir vaqtda sodir bo'lmaydi. O'sish jarayoni o'z chegarasiga ega bo'lib, ayollar uchun 20-25 yoshni tashkil qiladi.

        Ayollar organizmi o'ziga xos bo'lib, bir qancha xususiyatlari bilan erkak organizmidan farq qiladi. Ayollarda suyaklar qotish jarayoni 21—23 yoshga kelib yakunlanadi. Suyak mushaklarining rivojlanishi, o'sishi va shakllanishi taxminan 20-25 yoshgacha sodir bo'ladi va skeletni o'sish hamda shakllanishiga ta'sir ko'rsatadi.

        Mushaklarning rivojlanishi 25-30 yoshgacham davom etadi. Shu vaqtlarda jismoniy tarbiya sport mashg'ulotlari o'z samarasini beradi. Bo'ynning o'sishi asosan qiz bolalarda 19 yoshda tugallanadi.

        Skeletning rivojlanishi ayollarda 18-21 yoshga borib nihoyasiga yetadi. Birlamchi suyaklanish 17-18 yoshgacham, ikkilamchi suyaklanish 20-25 yoshgacham davom etishi mumkin.

        18-19 yoshli o'spirinlar toliqish hissini erta alomatlari paydo bo'lishidan oldin sezishlari mumkin. Bu qobiliyat esa kuchni masofada to'g'ri taqsimlay olishiga organizmning funksional zaxirasini oqilona boshqarishga yordam beradi.

        Iqlim va iqtisodiy sharoitga qarab qizlarda jinsiy yetilish taxminan 12-14 yoshdan boshlanib, 16-18 yoshlarda tugaydi, o'g'il bolalarda 13-15 yoshdan boshlanib, 18-20 yoshlargacha davom etadi.

        23-26 yoshda umurtqaning barcha qismlari suyaklanishi tugaydi. Umurtqa pog'onasining tez o'sish jarayoni o'g'il bolalarda qiz bolalarga nisbatan kechroq tugaydi, shuning uchun ham bolalar parta, stolda noto'g'ri o'tirganda umurtqa pog'onasi turli xilda qiyshayib qolishi mumkin. Bu bola qad-qomatining buzilishiga, ba'zan umurtqa pog'onasining bir tomonga egilib qolishiga - skolioz va boshqalarga sabab bo'ladi.

        Umurtqa pog'onasining bo'yin va bel qismi juda harakatchan. 20-25 yoshda chanoq suyaklari bir-biri bilan tutashadi. Ana shu davrda jismoniy mehnat va jismoniy tarbiyada buni e'tiborga olish kerak. Uzoq vaqt noto'g'ri o'tirish yoki tik turish, og'ir yuk tashish, yaxshi ovqatlanmaslik va boshqa noqulay sharoit natijasida chanoq suyaklari noto'g'ri birikadi, o'sishdan orqada qoladi.

        Bundan tashqari funksional rezervlar ham muhim ro'l tutadi. Fiziologik rezervlar 20-30 yoshlarda eng yuqori darajada bo'lib, yosh ortishi bilan u kamayib boradi. Masalan 20 yoshdan keyin o'pkaning tiriklik sig'imi, qonning sistolik hajmi va daqiqalik hajmi kamayadi, qon oqimiga perifirik qarshiligi ko'payadi. Sport mashqlari bilan muntazam shug'ullanish funksional rezervlarning ortishiga olib keladi. Biroq jismoniy mashqlar bilan shug'ullanishda uni to'g'ri tashkil etishgina organizmning fiziologik rezervlarini oshiradi, orqanizmni tashqi muhit ta'sirlariga chidamliligini oshirida, turli omillar ta'siriga yaxshi moslashishni ta'minlaydi.
      `
    },
    {
      id: 2,
      title: "Limfadrenaj mashg'ulotlari va ularning inson salomatligiga ta'siri",
      content: `Inson tanasining eng sezgir tizimlaridan biri — limfadir. Limfa tanadagi har bir hujayradan o'tadigan shaffof suyuqlikdir. Aynan u har kuni tanamizni to'ldiradigan barcha shlaklar, toksinlar va parchalanish mahsulotlarini zararsizlantiradi va olib tashlashga yordam beradi.`,
      details: `
        Yillar o'tishi bilan tana ham "charchaydi" va muvozanatsiz ovqatlanish, yomon ekologiya, zararli odatlar va harakatsiz turmush tarzi limfa suyuqligi harakatining sekinlashishiga va limfa oqimining buzilishiga olib keladi.

        Limfadrenaj mashg'ulotlari – bu limfa tizimining faoliyatini yaxshilashga yo'naltirilgan maxsus jismoniy mashg'ulotlar majmuasi bo'lib, ularning asosiy maqsadi limfa suyuqligining oqimini rag'batlantirishdir. Limfa tizimi organizmning immun himoyasida muhim rol o'ynaydi, toksinlarni va ortiqcha suyuqliklarni chiqarishda ishtirok etadi.

        Limfadrenaj mashg'ulotlari yordamida limfa tugunlari faoliyati oshadi, limfa oqimi tezlashadi va shu orqali to'qimalarda to'plangan shishlar kamayadi. Bu mashqlar qon aylanishi va metabolizm jarayonlarini ham yaxshilashga yordam beradi.

        Tadqiqotlar shuni ko'rsatadiki, limfadrenaj mashg'ulotlari yurak-qon tomir kasalliklari, limfa shishlari va immunitet zaifligi bo'lgan odamlar uchun foydali. Bundan tashqari, ularning muntazam bajarilishi umumiy salomatlikni oshirib, charchoq va stress darajasini kamaytiradi.
      `
    },
    {
      id: 3,
      title: "Pilates mashg'ulotlarining tarixi va ularning inson salomatligiga foydalari",
      content: `Pilates — bu mashg'ulotlar tizimi bo'lib, uni 20-asrning o'rtalarida nemis-amerikalik gimnast, bodibilding ustasi va tadbirkor Jozef G. Pilates yaratgan va keyinchalik uning shogirdlari tomonidan mukammalashtirilgan.`,
      details: `
        Pilates mashg'ulotlari odatda yotgan (qorin yoki orqa bilan) yoki o'tirgan holatda gilamcha ustida bajariladi. Ushbu mashg'ulotlar tananing barqarorligi va moslashuvchanligini rivojlantirishga, ayniqsa, qorin mushaklari kabi "yadro" mushaklarini kuchaytirish orqali erishishga qaratilgan. Mashqlar nazorat ostida bajariladigan harakatlar majmuasi orqali amalga oshiriladi.

        Pilates mashg'ulotlari tananing markaziy mushaklarini kuchaytirishga, tananing muvozanatini va moslashuvchanligini oshirishga qaratilgan. Pilates mashg'ulotlari nafaqat jismoniy sog'liqni yaxshilaydi, balki ruhiy holatni barqarorlashtirishga ham yordam beradi.

        Tadqiqotlar ko'rsatganidek, Pilates mashg'ulotlari ortopedik muammolar, xususan, orqa va bo'yin og'rig'ini kamaytirishda samarali. Shuningdek, bu mashqlar nafas olish tizimini yaxshilash, mushaklarning koordinatsiyasini oshirish va tananing umumiy funksional holatini yaxshilashda muhim ahamiyatga ega.

        Pilates mashg'ulotlarining sog'liq uchun foydali jihatlari:
        • Tana harakatchanligini oshiradi, moslashuvchanlikni rivojlantiradi
        • Ayniqsa qorin, bel, son va dumba kabi asosiy mushak guruhlari kuchi va tarangligini mustahkamlaydi
        • Tananing chap va o'ng tomonlaridagi mushak kuchi o'rtasida muvozanatni ta'minlaydi
        • Bel va oyoq-qo'llardagi mushaklarni ongli va aniq boshqarish ko'nikmalarini rivojlantiradi
        • Umurtqa pog'onasi barqarorligini mustahkamlab, harakatlarda xavfsizlikni oshiradi
        • Tananing to'g'ri holatda bo'lishiga yordam berib, holatni yaxshilaydi
        • Mushaklar o'rtasidaki nomutanosiblik natijasida yuzaga keladigan jarohatlarning oldini oladi yoki davolashga xizmat qiladi
        • Muvozanat va jismoniy harakatlarni muvofiqlashtirish qobiliyatini oshiradi
        • Yelka, bo'yinga va yuqori bel sohasiga tushadigan bosim va taranglikni kamaytiradi
        • Bo'g'imlar va umurtqaga oid jarohatlarda xavfsiz tiklanish jarayonini ta'minlaydi
        • Harakat tizimi bilan bog'liq jarohatlar ehtimolini kamaytiradi
        • Chuqur nafas olish orqali o'pka faoliyatini yaxshilaydi va qon aylanish tizimini faollashtiradi
        • Diqqatni jamlash va fikrni bir joyga qaratish salohiyatini oshiradi
        • Tana holati va harakatlariga nisbatan sezuvchanlikni kuchaytiradi
        • Ruhiy holatni me'yorlashtirib, stressni kamaytiradi hamda dam olishga ko'maklashadi
      `
    },
    {
      id: 4,
      title: "Nafas mashg'ulotlarining ahamiyati",
      content: `Nafas olish hayotning boshlanishi va davom etishining asosiy belgilaridan biridir. Biz nafas olayotganimizda tanamiz kislorod bilan ta'minlanadi va nafas chiqarish orqali keraksiz gazlarni chiqaramiz.`,
      details: `
        Kundalik hayotimizdagi stress va bosimlar ko'pincha bizning nafas olishimizga ta'sir qiladi – ba'zida biz buni sezmaymiz ham. Bosim ostida bo'lganimizda yoki o'zimizdan ko'proq narsani talab qilganimizda, nafasimiz qisqarishi yoki siqilishi mumkin. Agar biz tabiiy va erkin nafas olishni o'rganib, harakatlarimizni ham tabiiy tarzda bajarsak, hayot sifatimiz sezilarli darajada yaxshilanishi mumkin.

        Nafas mashqlari — bu organizmga kislorod ta'minotini oshirish, asab tizimini tinchlantirish va metabolik jarayonlarni normallashtirishga yo'naltirilgan texnikalardir. To'g'ri nafas olish usullari stressni kamaytirish, yurak urish tezligini barqarorlashtirish va umumiy psixofiziologik holatni yaxshilashga xizmat qiladi.

        Ilmiy tadqiqotlarda aniqlanishicha, chuqur va nazoratli nafas olish kislota-balansini tartibga solib, immunitetni kuchaytiradi va tanadagi oksidlovchi stressni kamaytiradi. Nafas mashqlari, xususan diafragmatik nafas olish, kognitiv funktsiyalarni oshirishda va konsentratsiyani yaxshilashda ham foydali.

        Nafas olish ritmining buzilishiga nima sabab bo'lishi mumkin?
        Inson tanasi va ongi bir-biri bilan chambarchas bog'liq bo'lib, turli jismoniy va ruhiy omillar nafas olish sifatiga ta'sir ko'rsatishi mumkin. Quyidagi omillar nafas olishning tabiiy ritmini buzishi yoki chuqur nafas ololmaslikka olib kelishi mumkin:

        Jismoniy va ruhiy sabablar:
        • Zo'riqish – Mushaklarning haddan tashqari taranglashishi, ayniqsa bo'yin, yelka va ko'krak qafasi sohasidagi mushaklarning qisqarishi, nafas olishni cheklashi mumkin
        • Stress – Doimiy stress holatida tanada "jang yoki qochish" reaksiyasi faollashadi, bu esa chuqur nafas olishning oldini oladi va yuzaki nafas olishga olib keladi
        • Qo'rquv – Qo'rquv hissi organizmni keskinlashtiradi, nafas olishni to'xtatishga yoki tezlashtirishga sabab bo'ladi
        • Tashvish – Bezovtalik va haddan tashqari o'y-fikrlar odatda tez va sayoz nafas olishga sabab bo'ladi, bu esa organizmni kislorod yetishmovchiligiga olib kelishi mumkin
        • Astma – Nafas yo'llarining torayishi natijasida nafas olish qiyinlashadi va odatiy nafas olish ritmi buziladi
        • Bosh og'rig'i – Kislorod yetishmovchiligi va mushaklarning zo'riqishi bosh og'rig'iga sabab bo'lishi yoki uni kuchaytirishi mumkin
        • Og'riq – Har qanday tana qismidagi og'riq tabiiy nafas olishni cheklashi va nafas olishni yuzaki qilishga majbur qilishi mumkin
        • Uyqusizlik (Insomnia) – Yomon uyqu nafas olish tizimiga ham ta'sir qiladi. Uyqu buzilishi odatda nafas olish ritmining notekis bo'lishiga olib keladi
      `
    }
  ];

  const renderContentWithLists = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.includes('•')) {
        const lines = paragraph.split('\n');
        const title = lines[0];
        const listItems = lines.slice(1).filter(line => line.trim().startsWith('•'));
        
        return (
          <Box key={index} sx={{ mb: 3 }}>
            {title && (
              <Paragraph sx={{ fontWeight: 600, marginBottom: '12px' }}>
                {title}
              </Paragraph>
            )}
            <Box component="ul" sx={{ pl: 3, mb: 0 }}>
              {listItems.map((item, idx) => (
                <ListItem key={idx}>
                  {item.replace('•', '').trim()}
                </ListItem>
              ))}
            </Box>
          </Box>
        );
      } else {
        return (
          <Paragraph key={index}>
            {paragraph.trim()}
          </Paragraph>
        );
      }
    });
  };

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
                color: '#96242c',
                '--color': '#96242c'
              }} />
            </motion.div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen style={{ 
        '--background': 'linear-gradient(135deg, #f8fafc 0%, #e9ecef 100%)',
        padding: '16px',
      }}>
        <Box sx={{ 
          maxWidth: '800px',
          margin: '0 auto',
          padding: '8px',
          marginTop:'25px'
        }}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence>
              {theorySections.map((section, index) => (
                <motion.div
                  key={section.id}
                  variants={cardAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <TheoryCard>
                    <SectionTitle>
                      {section.title}
                    </SectionTitle>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <Paragraph sx={{ mb: 3, fontStyle: 'italic' }}>
                        {section.content}
                      </Paragraph>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      <CustomAccordion>
                        <CustomAccordionSummary 
                          expandIcon={
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExpandMoreIcon />
                            </motion.div>
                          }
                        >
                          <Typography fontWeight="600" sx={{ color: '#fff' }}>
                            Batafsil ma'lumot
                          </Typography>
                        </CustomAccordionSummary>
                        <CustomAccordionDetails>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {renderContentWithLists(section.details)}
                          </motion.div>
                        </CustomAccordionDetails>
                      </CustomAccordion>
                    </motion.div>
                  </TheoryCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;