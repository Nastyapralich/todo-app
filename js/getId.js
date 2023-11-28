export default function getTaskId() {
    let a = new Date();
    return a.getMilliseconds(); // рандомное айди
  };