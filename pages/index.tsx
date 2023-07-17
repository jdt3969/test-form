import type { NextPage } from 'next';

import { Select } from 'react-hook-form-mantine';
import { FormProvider, useForm } from 'react-hook-form';


type HomePageProps = {};

const HomePage: NextPage<HomePageProps> = () => {
  const methods = useForm({ mode: 'onBlur' });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          (data) => console.log(data),
          (error) => console.error(error)
        )}
      >
        <Select 
          name="dataSource"
          data={[]} label=""
        />
      </form>
    </FormProvider>
  );
};

export default HomePage;
