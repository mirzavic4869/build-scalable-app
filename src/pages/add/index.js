import Layout from '@/components/layout';
import { AddPage } from '@/components/pages';

export default function Add() {
  return (
    <>
      <AddPage />
    </>
  );
}

Add.getLayout = function getLayout({ page }) {
  return <Layout>{page}</Layout>;
};
