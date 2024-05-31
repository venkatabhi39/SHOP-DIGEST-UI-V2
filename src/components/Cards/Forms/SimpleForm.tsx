import { Button, Checkbox, Label } from 'flowbite-react';
import TextInput from '@/components/FormFields/TextInput';
import Link from 'next/link';

export function SimpleForm() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <TextInput placeholder="Name" />
      </div>
      <div>
        <TextInput placeholder="Email" />
      </div>
      <div>
        <TextInput placeholder="App url" />
      </div>
      {/* <div>
        <TextInput id="email" type="text" required shadow placeholder="Email" color="white" />
      </div>
      <div>
        <TextInput id="url" type="text" required shadow placeholder="App Url" color="white" />
      </div> */}

      <Button type="submit" className="bg-primary-800 rounded-full mt-3">
        Register new account
      </Button>
    </form>
  );
}
