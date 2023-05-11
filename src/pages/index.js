import Layout from '@/components/layout';
import { HomePage } from '@/components/pages';

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
