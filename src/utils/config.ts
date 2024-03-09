// api and base_path both don't endsWith /

export let base_path = "csrfToken=RFaavayb4hv_NVMpy5yuOpRv; browserid=0nxEOkbXUhIjz91XVzxNFSwuv7YUrkSZFI-eMjb-KQZlO5Xm6J7N9eSm4Vk=; lang=vi; __bid_n=18df060cbacb4a21364207; _ga=GA1.1.75789531.1709134895; __stripe_mid=b2a3ac40-016a-47e5-bfbe-5354ceb5c3e20c8354; g_state={"i_l":0}; ndus=Y2ZmR6eteHuiFLtDAuV_QYBGZfih2zv5StTP7KFo; PANWEB=1; TSID=JBT2wEgCUObW6pyFj1GSELopKLK1Vjbc; ab_ymg_result={"data":"92a815d8d2643f8f503b79d8ffc05ad1a909ca2cc7ab64bb5236d884d7a55dba751142954bc4bf514fc8d38a4e725286467323b2fca35267d4d092c0be0cb3fe232a515a0e46b425e6ae112e26d2259bd11890e1391d61822cb8e833e8e62aa889b3b3a7a09d67413a8aeb9c07283c1fdaa56b9a17ef0d9e425f647c6ce0c93e","key_id":"66","sign":"759c0786"}; ndut_fmt=BFE6835A2A917845658CB04A34AE2882381140CEB2CFCFBAE1DD51B43C03FB09; ab_sr=1.0.1_MGNmYjJlZGViMmI3ZjJjZDI5MDJhNWQwMzdhMGEyNDVmYTgzZGQwYjBhNzMwNmRiNWJiYjFmYTRjOTA5NmQzNjdkZTZmY2IyOTIxNWJkNDZlNmU2NDc4YmJiNTI3OTQ1YjJlMDJhZjQ5MWVmMTk5ZTdhNGUzZjQ2YzhhOTVhNTQyNWYxNWRlZmJjZmU0NDA3ODA4OTJmZGVkYjM1ZjlhMQ==; _ga_06ZNKL8C2E=GS1.1.1709996362.5.1.1709996889.48.0.0"
export const setBasePath = (path: string) => {
  base_path = path
  if (!base_path.startsWith("/")) {
    base_path = "/" + base_path
  }
  if (base_path.endsWith("/")) {
    base_path = base_path.slice(0, -1)
  }
}
if (window.ALIST.base_path) {
  setBasePath(window.ALIST.base_path)
}

export let api = import.meta.env.VITE_API_URL as string
if (window.ALIST.api) {
  api = window.ALIST.api
}
if (api === "/") {
  api = location.origin + base_path
}
if (api.endsWith("/")) {
  api = api.slice(0, -1)
}

export const monaco_cdn =
  window.ALIST.monaco_cdn ||
  "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/monaco-editor/0.33.0-dev.20220228/min/vs"
