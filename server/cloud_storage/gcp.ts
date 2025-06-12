import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "shining-sol-453718-d6",
  credentials: {
    type: "service_account",
    project_id: "shining-sol-453718-d6",
    private_key_id: "31afc7634399439619db2333f1887d2fd283c9d6",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBywd8BSTW5RYY\n2djEBWJgFYoh0mTQ4E+Y4mnv6wKSqiAg6iMHq7FcOaMJ9YsXO8/C8Zu0qE80WLNY\nS5uCsKHWAnZsSkIYg+KLfBwzs5z1zzVYkhwbmE+MVk3KjKsvPV9YZg/nga+DziJG\nTekI7bGPCJTDipMmfdTYwFB+LZ55X9j118o26NzdUT4fpPx6YlpFmHFOjh8oZgTG\nxlCEaNipDZcr3AIB0MoTarM79ZD2iDKOPIC8qSA5T4G3xZMgjnSSiWyMEYzGOd+b\nohnoDVFeeym0v05KcZDah87GUPfosOmgFRZKo/nm8zU0PhMbfumf1zG9LlvJlXiB\neFYZFn4VAgMBAAECggEATMdQns027ED1AUGGBRuQ/zppcL73nF3Si2Lgz+IPMeZf\nNkstN8PJUB2xv6ddxQW4aabppqisQLQH0iqaYSvz4mM1YfAFwcq2vcadMcqunCDN\nJNs2caRll9c1mNMkm2G4XcCJ+pHB5PmNUMdbVWM+3slqjxJe/HgMFRgUi/ks+S7T\nj95J+YTXYq80Vz6WtrjI04vrBj39InboJ/2OtIDDTN+Uav7OYb9ICwH/wxDcLoQr\n5yIvTvWMZ8mXHBAQhr5NIrHgiiIZkDuRX2jz6OYOhwxqETTEFzlOQZR3S4j0vZek\nbn5KzShf5IDlfqqxMZzo/dxiX64k/yZuZXIq276ynQKBgQD55gVjwCc8i9VgScyX\n36OTWetvD9P5Gg/UuW9jo2uAUC4CRmG0VxNKADBGDljDrlfUIBj45SEMrVBtRgrb\nh6f4gCzQ1kvaeL4Ymed2gyS4OL+5G7M7c3LkNy1YQ7W5DH3nLKL8802LwzrM9dNV\nSj398eYqNhkSfN/jBFKec2ia5wKBgQDGhlLjzH7okB/06/NogXh5Uttzbf478IBr\nW4mYjPQAFE1fkinTuFl9BA3dOFVbqIMV15WhIUMB6jaPU2FdgPQXg/ZBVqRneeim\nJ8X7ueq5Qi1dRvCDeViY8zAZJDMvuvqkm4v1FWfpFniqgOMqdxubSbd8y4gzfNlC\ng1zyZn6bowKBgBVcZiWKrU/tnAWpCUYKJc9YpllN/w6R/bxvRWg89dl4ARbMsVlb\nABkZPwcd/tRrOLK3M6tC2rpcrj1I+XCefest+aa4Sq+YFpe/wBtPRnpAz5KhHYb9\nbVq4pLWgxA3XVYPHOv9oRL6np4URlkj6GaZ1YPlGuonsBq8/FVjaAJ0NAoGAa3hP\n6w3LLe7Hvfj1ff+IznTyY9yJor0hZ/zX0gOMG3biI/imN/02RJ0rPDTA0Ku6utpI\nIEA3XBQEkTZcIRgsC4beiqRyv6mZLkmdvhX5YWzXzgUXMrVAJxyPTyzvoMkh4nZq\nH7UE2YPWssavM0/jW/9eG2q7QtQ1cPJYIMknhO0CgYEAn7OGqaUNx0EM6UlL+Mlb\nVUeO3PS0FcWLEiHDJbnaH21w5C/m0IXJ6W4nDz5qtYHvNh2h7nh4SrxoNyr0AjIV\nxZmmKCciVKk+Fm4RAa6L3K/0a2V3iNxcc1bHWGTH40DWwus0A56UU/c4QytePgYM\nZV+ek4uRlD1JH4KOnj+wAz4=\n-----END PRIVATE KEY-----\n",
    client_email: "for-backend@shining-sol-453718-d6.iam.gserviceaccount.com",
    client_id: "115597023359826581942",
    universe_domain: "googleapis.com",
  },
});

const bucketName = "client-metrics-assets";
const bucket = storage.bucket(bucketName);

export { storage, bucket, bucketName };
