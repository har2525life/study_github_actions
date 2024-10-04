import { Button, Form, Input } from "antd";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

function LoginView() {
    const { register, handleSubmit } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    });
    const onSubmit = (data: LoginSchemaType) => {
        console.log(data);
    };
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-slate-100">
            <Form
                onFinish={handleSubmit(onSubmit)}
                className="w-1/2 h-1/2 bg-red-200"
            >
                <h1 className="text-center text-xl font-bold">login</h1>
                <Input
                    {...register("email")}
                    placeholder="email"
                    type="email"
                />
                <Input
                    {...register("password")}
                    placeholder="password"
                    type="password"
                />
                <Button htmlType="submit">login</Button>
            </Form>
        </div>
    );
}

export default LoginView;
