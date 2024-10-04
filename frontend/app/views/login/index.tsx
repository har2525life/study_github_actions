import { Button, Form, Input } from "antd";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormItem } from "react-hook-form-antd";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

function LoginView() {
    const { control, register, handleSubmit } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    });
    const onSubmit = (data: LoginSchemaType) => {
        console.log(data);
    };
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-slate-50">
            <Form className="w-1/2 h-1/2">
                <h1 className="text-center text-xl font-bold">login</h1>
                <FormItem control={control} name="email">
                    <Input
                        className="mt-4"
                        placeholder="email"
                        type="email"
                        {...register("email")}
                    />
                </FormItem>
                <FormItem control={control} name="password">
                    <Input
                        placeholder="password"
                        type="password"
                        {...register("password")}
                    />
                </FormItem>
                <Button className="w-full" onClick={handleSubmit(onSubmit)}>
                    login
                </Button>
            </Form>
        </div>
    );
}

export default LoginView;
