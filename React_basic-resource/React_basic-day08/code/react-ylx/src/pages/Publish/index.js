import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { createArticleAPI, getArticleById, updateArticleAPI } from '@/apis/article'
import { useChannel } from '@/hooks/useChannel'

const { Option } = Select

const Publish = () => {
  // 獲取頻道列表
  const { channelList } = useChannel()

  // 提交表單
  const onFinish = (formValue) => {
    console.log(formValue)
    // 校驗封面型別imageType是否和實際的圖片列表imageList數量是相等的
    if (imageList.length !== imageType) return message.warning('封面类型和图片数量不匹配')
    const { title, content, channel_id } = formValue
    // 1. 按照介面文件的格式處理收集到的表單資料
    const reqData = {
      title,
      content,
      cover: {
        type: imageType, // 封面模式
        // 這裡的url處理邏輯只是在新增時候的邏輯
        // 編輯的時候需要做處理
        images: imageList.map(item => {
          if (item.response) {
            return item.response.data.url
          } else {
            return item.url
          }
        }) // 圖片列表
      },
      channel_id
    }
    // 2. 呼叫介面提交
    // 處理呼叫不同的介面 新增 - 新增介面  編輯狀態 - 更新介面  id
    if (articleId) {
      // 更新介面
      updateArticleAPI({ ...reqData, id: articleId })
    } else {
      createArticleAPI(reqData)
    }
  }

  // 上傳回調
  const [imageList, setImageList] = useState([])
  const onChange = (value) => {
    console.log('正在上传中', value)
    setImageList(value.fileList)
  }

  // 切換圖片封面型別
  const [imageType, setImageType] = useState(0)
  const onTypeChange = (e) => {
    console.log('切换封面了', e.target.value)
    setImageType(e.target.value)
  }

  // 回填資料
  const [searchParams] = useSearchParams()
  const articleId = searchParams.get('id')
  // 獲取實例
  const [form] = Form.useForm()
  useEffect(() => {
    // 1. 通過id獲取資料
    async function getArticleDetail () {
      const res = await getArticleById(articleId)
      const data = res.data
      const { cover } = data
      form.setFieldsValue({
        ...data,
        type: cover.type
      })
      // 為什麼現在的寫法無法回填封面？
      // 資料結構的問題  set方法 -> { type: 3 }   { cover: { type: 3}}

      // 回填圖片列表
      setImageType(cover.type)
      // 顯示圖片({url:url})
      setImageList(cover.images.map(url => {
        return { url }
      }))
    }
    // 只有有id的時候才能呼叫此函式回填
    if (articleId) {
      getArticleDetail()
    }
    // 2. 呼叫實例方法 完成回填
  }, [articleId, form])

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: `${articleId ? '编辑' : '发布'}文章` },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {/* value屬性使用者選中之後會自動收集起來作為介面的提交欄位 */}
              {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* 
              listType: 決定選擇檔案框的外觀樣式
              showUploadList: 控制顯示上傳列表
            */}
            {imageType > 0 && <Upload
              listType="picture-card"
              showUploadList
              action={'http://geek.itheima.net/v1_0/upload'}
              name='image'
              onChange={onChange}
              maxCount={imageType}
              fileList={imageList}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            {/* 富文本編輯器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish