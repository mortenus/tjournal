import React from 'react';
import { NextPage } from 'next';
import { MainLayout } from '../layouts/MainLayout';
import WriteForm from '../components/WriteForm';

const WritePage: NextPage = () => {
  return (
    <MainLayout contentFullWidth hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
