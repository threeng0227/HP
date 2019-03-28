export async function GetAllStores() {
    try {
     
      let response = await fetch(
        'https://hp-api-dev.azurewebsites.net/api/Stores',{
            method:'GET',
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRlc3QzQGdtYWlsLmNvbSIsIlVzZXJJZCI6IjkiLCIiOiIiLCJqdGkiOiJlYzIxZGRlYy04MmZhLTQ5N2MtOGEwYi02ZGZiMDYzNGExMzUiLCJleHAiOjE1NTM3ODA1NTQsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.rf7f4p4BRwLgmV6aOGeu8sBdMttIv_iAWZta2AwReH0"
            }
        },
      );
      let responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error(error);
    }
  }
  export async function GetStoreById(id) {
    try {
     
      let response = await fetch(
        'https://hp-api-dev.azurewebsites.net/api/Stores/'+id,{
            method:'GET',
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRlc3QzQGdtYWlsLmNvbSIsIlVzZXJJZCI6IjkiLCIiOiIiLCJqdGkiOiJlYzIxZGRlYy04MmZhLTQ5N2MtOGEwYi02ZGZiMDYzNGExMzUiLCJleHAiOjE1NTM3ODA1NTQsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.rf7f4p4BRwLgmV6aOGeu8sBdMttIv_iAWZta2AwReH0"
            }
        },
      );
      let responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error(error);
    }
  }
  export async function GetFullAllByStoreId(id) {
    try {
     
      let response = await fetch(
        'https://hp-api-dev.azurewebsites.net/api/Category/ByStore/'+id,{
            method:'GET',
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRlc3QzQGdtYWlsLmNvbSIsIlVzZXJJZCI6IjkiLCIiOiIiLCJqdGkiOiJlYzIxZGRlYy04MmZhLTQ5N2MtOGEwYi02ZGZiMDYzNGExMzUiLCJleHAiOjE1NTM3ODA1NTQsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.rf7f4p4BRwLgmV6aOGeu8sBdMttIv_iAWZta2AwReH0"
            }
        },
      );
      let responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error(error);
    }
  }