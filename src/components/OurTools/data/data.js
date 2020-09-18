import boxes from '../../../assets/svg/boxes.svg';
import money from '../../../assets/svg/money.svg';
import avatar from '../../../assets/svg/avatar.svg';
import { useTranslation } from 'react-i18next';

const OurToolsData = () => {
    const { t } = useTranslation();

    return [
        {
            image: boxes,
            text: t('OurToolsData.text1')
        },
        {
            image: money,
            text: t('OurToolsData.text2')
        },
        {
            image: avatar,
            text: t('OurToolsData.text3')
        }
    ]
}

export default OurToolsData;