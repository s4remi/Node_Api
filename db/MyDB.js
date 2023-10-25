function MyDB() {
  const myDB = {};
  const prompts = [12, 24, 3, 4];
  myDB.getPrompts = () => {
    return prompts;
  };
  return myDB;
}
export const myDB = MyDB();
