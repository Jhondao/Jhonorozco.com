"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactForm = () => {
    const [sucessForm, setSucessForm] = useState(false)
    const [errorForm, setErrorForm] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true)
        setErrorForm(null)
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(values)
            })
            const data = await response.json()

            if (!response.ok || data.error) {
                setErrorForm(data.error?.message || "Ocurrió un error al enviar el formulario. Por favor, intenta de nuevo.")
                return
            }

            setSucessForm(true)
        } catch (error) {
            setErrorForm("Error de conexión. Por favor, verifica tu internet.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            {sucessForm ? (
                <h4>Formulario se ha enviado con éxito ✌🏽</h4>
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Nombre"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Correo"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Escribe un mensaje..."
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </Button>
                    {errorForm && (
                        <p className="text-red-500 text-sm font-medium mt-2">{errorForm}</p>
                    )}
                </form>
            )}
        </Form>
    );
}

export default ContactForm;