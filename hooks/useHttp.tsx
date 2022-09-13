export const useHttp = () => {
  const request = async(url: string, method: string = 'GET', body: any) => {
    if (method == "POST") {
      const response = await fetch('http://localhost:3000/api/addOperator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      });
    } else {
      const res = await fetch(`http://localhost:3000/${url}`);
      const data = await res.json();
      return data
    }
  }
  return { request }
}
