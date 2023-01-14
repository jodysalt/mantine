import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Text, MantineProvider } from '@mantine/core';


export default { title: 'Form' };

function Demo() {
  const form = useForm({
    initialValues: { text1: 'initial value 1', text2: 'initial value 2' },
    initialDirty: { text2: true },
  });

  return (
    <>
      <TextInput {...form.getInputProps('text1')} label="Touched/dirty demo" placeholder="Touched/dirty demo" />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span color={form.isTouched('text1') ? 'blue' : 'red'}>
          {form.isTouched('text1') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span color={form.isDirty('text1') ? 'blue' : 'red'}>
          {form.isDirty('text1') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>

      <TextInput {...form.getInputProps('text2')} label="Touched/dirty demo" placeholder="Touched/dirty demo" />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span color={form.isTouched('text2') ? 'blue' : 'red'}>
          {form.isTouched('text2') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span color={form.isDirty('text2') ? 'blue' : 'red'}>
          {form.isDirty('text2') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </>
  );
}

export function Dirty2() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}