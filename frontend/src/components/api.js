import { Form } from "react-router-dom";

export async function loginUser(creds) {
  const res = await fetch("http://localhost:4040/api/v1/ba/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function surveyForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.user.ba_name;
  const PhoneEl = storeTwo.user.ba_phone;
  const locationsEl = storeTwo.user.ba_region;

  const data_one = { ...test };

  const formData = new FormData();

  for (const key in data_one) {
    if (data_one.hasOwnProperty(key)) {
      formData.append(key, data_one[key]);
      formData.append("place", "FORM_FITMENT");
      formData.append("ba_name", nameEl);
      formData.append("ba_phone", PhoneEl);
      formData.append("ba_region", locationsEl);
    }
  }

  const res = await fetch("https://brandyolk.iguru.co.ke/public_html/process/BM.php", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
    },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    console.log(data);
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

// retail api
export async function testridesForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;

  const data_one = { ...test };

  // const formData = new FormData();

  // for (const key in data_one) {
  //   if (data_one.hasOwnProperty(key)) {
  //     formData.append(key, data_one[key]);
  //     formData.append("project", "RETAIL_STOCK");
  //     formData.append("ba_name", nameEl);
  //     formData.append("ba_phone", PhoneEl);
  //     formData.append("ba_region", locationsEl);
  //   }
  // }

  const res = await fetch("https://brandyolk.iguru.co.ke/process/BM.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data_one,
      project: "FORM_FITMENT",
      ba_name: nameEl,
      ba_phone: PhoneEl,
      ba_region: locationsEl,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.log(data);
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function fleetForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;

  const data_one = { ...test };

  // const formData = new FormData();

  // for (const key in data_one) {
  //   if (data_one.hasOwnProperty(key)) {
  //     formData.append(key, data_one[key]);
  //     formData.append("project", "WHOLESALE_STOCK");
  //     formData.append("ba_name", nameEl);
  //     formData.append("ba_phone", PhoneEl);
  //     formData.append("ba_region", locationsEl);
  //   }
  // }

  // console.log(formData);

  const res = await fetch("https://brandyolk.iguru.co.ke/process/BM.php", {
    mode: 'no-cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data_one,
      project: "FORM_FITMENT",
      ba_name: nameEl,
      ba_phone: PhoneEl,
      ba_region: locationsEl,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.log(data);
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function summaryForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;
  const data_one = { ...test };


  // const formData = new FormData();

  // for (const key in data_one) {
  //   if (data_one.hasOwnProperty(key)) {
  //     formData.append(key, data_one[key]);
  //   }
  // }

  // formData.append("project", "FORM_FITMENT");
  // formData.append("ba_name", nameEl);
  // formData.append("ba_phone", PhoneEl);
  // formData.append("ba_region", locationsEl);



  const res = await fetch("https://brandyolk.iguru.co.ke/process/BM.php", {
    mode: 'no-cors',
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data_one,
      project: "FORM_FITMENT",
      ba_name: nameEl,
      ba_phone: PhoneEl,
      ba_region: locationsEl,
    }),

  });

  console.log(res);

  const data = await res.json();
  if (!res.ok) {
    console.log(data);
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function hotleadsForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;

  const data_one = { ...test };

  const formData = new FormData();

  for (const key in data_one) {
    if (data_one.hasOwnProperty(key)) {
      formData.append(key, data_one[key]);
      formData.append("place", "HOT_LEADS");
      formData.append("ba_name", nameEl);
      formData.append("ba_phone", PhoneEl);
      formData.append("ba_region", locationsEl);
    }
  }

  const res = await fetch("https://brandyolk.iguru.co.ke/process/BM.php", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    console.log(data);
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

// api form upload for park
export async function parkForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);
  console.log(storeTwo);
  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;

  const data_one = { ...test };

  const formData = new FormData();

  for (const key in data_one) {
    if (data_one.hasOwnProperty(key)) {
      formData.append(key, data_one[key]);
      formData.append("place", "PARK_MAPPING");
      formData.append("ba_name", nameEl);
      formData.append("ba_phone", PhoneEl);
      formData.append("ba_region", locationsEl);
    }
  }

  const res = await fetch("https://brandyolk.iguru.co.ke/process/BM.php", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
    },
    body: formData,
  });

  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    console.log(data);
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function getUserData() {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);
  console.log(storeTwo);
  const userResult = storeTwo;
  return userResult;
}
