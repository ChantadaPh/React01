import { useTranslation } from 'react-i18next';
import { Form, Select, Input, DatePicker } from 'antd';

export const Test2 = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2 style={{ float: 'left', margin: '10px 0px 0px 10px', display: 'block' }}>{t('Form & Table')}</h2>
            <div style={{ clear: 'both', display: 'grid' }}>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value={t('Prefix')}>{t('Prefix')}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label={t('Name')}>
                    <Input />
                </Form.Item>
                <Form.Item label={t('LastName')}>
                    <Input />
                </Form.Item>
                <Form.Item label={t('Birth date')}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value={t('Nationality')}>{t('Prefix')}</Select.Option>
                    </Select>
                </Form.Item>
            </div>
        </div>
    )
}