import React from 'react'
import { Label, TextInput } from 'flowbite-react';
import Button from '../button';

const FormSection = () => {
    return (
        <form className="flex max-w-md flex-col gap-4 text-left">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Ваш Emeil" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Ваше імя та прізвище" />
                </div>
                <TextInput id="password1" type="text" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Telegram" value="Telegram" />
                </div>
                <TextInput id="Telegram" type="text" required />
            </div>
            <Button title='Купити зараз' />
        </form>
    )
}

export default FormSection