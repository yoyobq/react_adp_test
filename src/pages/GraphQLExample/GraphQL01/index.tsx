// 一个真正的BlankPage
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';

// 第一步：建立 Client
const client: ApolloClient<any> = new ApolloClient({
  // 单独测试的时候要引入fetch，但结合antd pro后不需要
  uri: 'http://192.168.72.55:4000/',
  cache: new InMemoryCache(),
});

// 第二步：进行查询
// 请注意这里是一个异步操作，如果不理解请去了解js的promise相关知识
client
  .query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `,
  })
  // eslint-disable-next-line no-console
  .then((result: any) => console.log(result));

// 第三步: 结合Antd pro
// 这是普通组件
const ApolloComponent: React.FC<any> = () => (
  <div>
    <h2>显示书籍信息的 Apollo Client 🚀</h2>
  </div>
);

// 这是查询字符串
const BOOK_INFO = gql`
  {
    books {
      title
      author
    }
  }
`;

// 这是绑定了查询结果的组件
const BookInfo: React.FC<any> = () => {
  const { loading, error, data } = useQuery(BOOK_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error} )</p>;

  return data.books.map(({ author, title }: any) => (
    <div key={title}>
      <p>
        标题：{title}
        <br />
        作者: {author}
      </p>
    </div>
  ));
};

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <ApolloProvider client={client}>
      <ApolloComponent />
      <BookInfo />
    </ApolloProvider>
  </PageHeaderWrapper>
);
