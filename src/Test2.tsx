import './styles.scss';
import { useTranslation } from 'react-i18next';
import { Form, Select, Input, DatePicker, Radio, Button, Table, Space } from 'antd';
import Columns from './Columns'


export const Test2 = () => {
    const { t } = useTranslation();

    const handleMainButtonClick = () => { window.location.href = '/' };

    Columns.FORM.forEach(column => { column.title = t(column.title) });

    const rowSelection = {
        //     selectedRowKeys,
        // onChange: onSelectChange,
    };

    const clearData = () => {

    }

    const addData = () => {
        
    }

    return (
        <div style={{ display: 'block' }}>
            <h2 style={{ float: 'left', margin: '0px 0px 10px 10px' }}> {t('Form & Table')} </h2>
            <div style={{ clear: 'both', display: "grid" }}>
                <Space className='space' style={{ justifyContent: 'right', margin: '0px 0px 10px 10px' }}>
                    <Button onClick={handleMainButtonClick}>{t('Main')}</Button>
                </Space>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='mainDiv' style={{ width: "800px", border: "1px solid", margin: "0px 10px 0px 10px", borderRadius: "8px" }}>
                    <Space className='space1' style={{ display: 'flex', margin: "10px 0px 0px 8px" }}>
                        <Form.Item label={t('Prefix')}>
                            <Select style={{ width: '80px' }}>
                                <Select.Option value={t('Mr')}>{t('Mr')}</Select.Option>
                                <Select.Option value={t('Ms')}>{t('Ms')}</Select.Option>
                                <Select.Option value={t('Miss')}>{t('Miss')}</Select.Option>
                            </Select>
                        </Form.Item>&nbsp;
                        <Form.Item label={t('Name')}>
                            <Input />
                        </Form.Item>&nbsp;
                        {/*  */}
                        <Form.Item label={t('Lastname')}>
                            <Input />
                        </Form.Item>
                    </Space>

                    <Space className='space2' style={{ display: 'flex', marginLeft: "8px" }}>
                        <Form.Item label={t('Birthday')}>
                            <DatePicker />
                        </Form.Item>&nbsp;
                        <Form.Item label={t('Nationality')}>
                            <Select style={{ width: '100px' }}>
                                <Select.Option value={t('Thai')}>{t('Thai')}</Select.Option>
                            </Select>
                        </Form.Item>
                    </Space>

                    <Space className='space3' style={{ display: 'flex', marginLeft: "8px" }}>
                        <Form.Item label={t('Identification number')}>
                            <Input style={{ width: '50px' }} />&nbsp;-&nbsp;
                            <Input style={{ width: '100px' }} />&nbsp;-&nbsp;
                            <Input style={{ width: '100px' }} />&nbsp;-&nbsp;
                            <Input style={{ width: '75px' }} />&nbsp;-&nbsp;
                            <Input style={{ width: '50px' }} />
                        </Form.Item>
                    </Space>

                    <Space className='space4' style={{ display: 'flex', marginLeft: "8px" }}>
                        <Form.Item label={t('Sex')}>
                            <Radio.Group>
                                <Radio value={t('Male')}> {t('Male')} </Radio>
                                <Radio value={t('Female')}> {t('Female')} </Radio>
                                <Radio value={t('None')}> {t('None')} </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Space>

                    <Space className='space5' style={{ display: 'flex', marginLeft: "8px" }}>
                        <Form.Item label={t('Phone number')}>
                            <Select style={{ width: '70px' }}>
                                <Select.Option value="+66" >+66</Select.Option>
                            </Select>&nbsp;-&nbsp;
                            <Input style={{ width: '200px' }} name="phoneNumber" />
                        </Form.Item>
                    </Space>

                    <Space className='space6' style={{ display: 'flex', marginLeft: "8px" }}>
                        <Form.Item label={t('Passport')}>
                            <Input style={{ width: '300px' }} />
                        </Form.Item>
                    </Space>

                    <Space className='space7' style={{ marginLeft: "8px" }}>
                        <Form.Item label={t('Expect salary')}>
                            <Input style={{ width: '250px' }} />
                        </Form.Item>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Space>

                    <Space className='space8' style={{ alignContent: 'right', margin: '0px 10px 10px 0px' }}>
                        <Button onClick={clearData}>{t('Clear')}</Button>&nbsp;
                        <Button onClick={addData}>{t('Add')}</Button>
                    </Space>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0px 0px 0px' }}>
                <Table rowSelection={rowSelection} columns={Columns.FORM} />
            </div>
        </div>
    )
}