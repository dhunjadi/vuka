import { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([
    {
      id: "1",
      title: "news title1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "2",
      title: "news title2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "3",
      title: "news title3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "hospitality",
    },
    {
      id: "4",
      title: "news title4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "mechatronics",
    },
    {
      id: "5",
      title: "news title5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "mechatronics",
    },
    {
      id: "6",
      title: "news title6",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "hospitality",
    },
    {
      id: "7",
      title: "news title7",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "8",
      title: "news title8",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "9",
      title: "news title9",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "hospitality",
    },
    {
      id: "10",
      title: "news title10",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "mechatronics",
    },
    {
      id: "11",
      title: "news title11",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "12",
      title: "news title12",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "13",
      title: "news title13",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "hospitality",
    },
    {
      id: "14",
      title: "news title14",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "general",
    },
    {
      id: "15",
      title: "news title15",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "mechatronics",
    },
    {
      id: "16",
      title: "news title16",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "mechatronics",
    },
    {
      id: "17",
      title: "news title17",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "mechatronics",
    },
    {
      id: "18",
      title: "news title18",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      textFull:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      type: "hospitality",
    },
  ]);
  useEffect(() => {
    const data = localStorage.getItem("my-news");
    if (data) {
      setNews(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-news", JSON.stringify(news));
  });

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};
