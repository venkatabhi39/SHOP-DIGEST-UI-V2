import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { SimpleForm } from '@/components/Cards/Forms/SimpleForm';
import { UserAvatarList } from '../Sections/UserAvatarList';

export function ProductOverviewCta() {
  return (
    <div className="p-6 px-8 bg-gray-50 rounded-lg border">
      <h3 className="mb-4">Install on your Shopify store</h3>
      <div className="" style={{ zoom: '0.8' }}>
        <SimpleForm />
      </div>
      <div className="flex justify-center mt-4 flex-col text-center">
        <UserAvatarList />
        <p className="mt-2">
          Rated Be <b>15.7k</b> Reviews
        </p>
      </div>
    </div>
  );
}
