"use client"

import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useRouter} from "next/navigation";
import {bookSchema} from "@/lib/validations";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import ColorPicker from "@/components/admin/ColorPicker";


interface Props extends Partial<Book> {
    type: "create" | "update";
}

const BookForm = ({
                      type,
                      ...book
                  }: Props) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof bookSchema>>({
        resolver: zodResolver(bookSchema),
        defaultValues: {
            title: '',
            author: '',
            genre: '',
            rating: 1,
            totalCopies: 1,
            description: '',
            coverUrl: '',
            coverColor: '',
            videoUrl: '',
            summary: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    }


    return (


        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name={"title"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Title</FormLabel>
                            <FormControl>
                                <Input required
                                       placeholder="Book Title"
                                       type="text" {...field}
                                       className="book-form_input"
                                />

                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"author"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Author</FormLabel>
                            <FormControl>
                                <Input required
                                       placeholder="Book Author"
                                       type="text" {...field}
                                       className="book-form_input"
                                />

                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"genre"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Genre</FormLabel>
                            <FormControl>
                                <Input required
                                       placeholder="Book Genre"
                                       type="text" {...field}
                                       className="book-form_input"
                                />

                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name={"rating"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Rating</FormLabel>
                            <FormControl>
                                <Input required
                                       placeholder="Book Rating"
                                       type="number" {...field}
                                       min={1}
                                       max={5}
                                       className="book-form_input"
                                />

                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name={"totalCopies"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Total Copies</FormLabel>
                            <FormControl>
                                <Input required
                                       placeholder="Total Copies"
                                       type="number" {...field}
                                       min={1}
                                       max={10000}
                                       className="book-form_input"
                                />

                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"coverUrl"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Image</FormLabel>
                            <FormControl>
                                {/* File Upload*/}
                                <Input required
                                       placeholder="Book Photo"
                                       type="text" {...field}
                                       className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"coverColor"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Primary Color</FormLabel>
                            <FormControl>
                                {/* Color Picker*/}
                                <ColorPicker value={field.value} onPickerChange={field.onChange}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name={"description"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Book Description"
                                    className="book-form_input"
                                    {...field}
                                    rows={10}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name={"videoUrl"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Trailer</FormLabel>
                            <FormControl>
                                {/* Video Upload*/}
                                <Input required
                                       placeholder="Book Trailer"
                                       type="text" {...field}
                                       className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name={"summary"}
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel
                                className="text-base font-normal text-black">Book Summary</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Book Summary"
                                    className="book-form_input"
                                    {...field}
                                    rows={5}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="book-form_btn text-white">Add Book to Library</Button>

            </form>
        </Form>


    )
}
export default BookForm;
