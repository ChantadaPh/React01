import { useTranslation } from 'react-i18next';

export const Test1 = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2 style={{ float: 'left', margin: '10px 0px 0px 10px' }}>{t('Layout & Style')}</h2>
        </div>
    )
}