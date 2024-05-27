import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export function SimpleForm() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <TextInput sizing="sm" id="password2" type="password" required shadow />
      </div>
      <div>
        <TextInput sizing="sm" id="repeat-password" type="password" required shadow />
      </div>

      <Button type="submit" className="bg-primary-800">
        Register new account
      </Button>
    </form>
  );
}
