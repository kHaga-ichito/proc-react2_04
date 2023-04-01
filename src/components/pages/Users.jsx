import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ああああ${val}`,
    image: "https://source.unsplash.com/N04FIfHhv_k",
    email: "123456@aaa.com",
    phone: "090-0000-1111",
    conmany: {
      name: "某株式会社"
    },
    website: "https://www.amazon.co.jp/"
  };
});
const user = {
  name: "ああああ",
  image: "https://source.unsplash.com/N04FIfHhv_k",
  email: "123456@aaa.com",
  phone: "090-0000-1111",
  conmany: {
    name: "某株式会社"
  },
  website: "https://www.amazon.co.jp/"
};
export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SUSerArea>
        <SearchInput />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUSerArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUSerArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
