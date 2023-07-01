import { AuthLayout } from '@/components'
import { Button, Form, Input } from 'antd'

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <AuthLayout>
      <main>
        <section className="">
          <div className="flex justify-center w-full">
            <div className="py-4 px-8 bg-gray-300 rounded-xl border-gray-500 border">
              <h1 className="mb-10 text-4xl font-bold text-center text-gray-600">
                Chat App
              </h1>
              <Form
                name="basic"
                initialValues={{
                  remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]}
                >
                  <Input size="large" placeholder="Username" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!'
                    }
                  ]}
                >
                  <Input.Password size="large" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <p>
                    {`Don't have account?`}
                    <span>
                      <a className="text-blue-500"> Register</a>
                    </span>
                  </p>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="bg-blue-500 w-full"
                    type="primary"
                    htmlType="submit"
                    size="large"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </section>
      </main>
    </AuthLayout>
  )
}

export default Login
