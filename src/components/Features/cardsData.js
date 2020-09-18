import image1 from '../../assets/images/card1.png';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';
import { useTranslation } from 'react-i18next';

const CardsData = () => {
    const { t } = useTranslation();

    return [
        {
            image: image1,
            title: t('FeatureCardsData.card1_title'),
            text: t('FeatureCardsData.card1_text')
        },
        {
            image: image2,
            title: t('FeatureCardsData.card2_title'),
            text: t('FeatureCardsData.card2_text')
        },
        {
            image: image3,
            title: t('FeatureCardsData.card3_title'),
            text: t('FeatureCardsData.card3_text')
        }
    ]
}

export default CardsData;