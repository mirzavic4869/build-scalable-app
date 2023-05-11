import Layout from '@/components/layout';
import { EditPage } from '@/components/pages';

export default function Edit() {
  return (
    <>
      <EditPage />
    </>
  );
}

Edit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
