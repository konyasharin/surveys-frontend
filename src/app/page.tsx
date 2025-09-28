import { Button, Text } from '@mantine/core';

export default function Home() {
  return (
    <div className={'h-screen flex justify-center items-center'}>
      <div className={'flex flex-col gap-5 items-center'}>
        <Text size={'xl'}>Let's start creating surveys</Text>
        <Button className={'flex-initial w-fit!'}>Start</Button>
      </div>
    </div>
  );
}
