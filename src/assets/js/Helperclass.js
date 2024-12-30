export default class Initializer {
  constructor() {
    this.tipo = "Tiempo-completo";
    this.title = "";
    this.description = "";
    this.salary = "Debajo de $500 mlc";
    this.location = "";
    this.company = {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    };
  }
  getInitializedData() {
    return {
      tipo: this.tipo,
      title: this.title,
      description: this.description,
      salary: this.salary,
      location: this.location,
      company: this.company,
    };
  }
  generateNewFiledData(form) {
    return {
      tipo: form.tipo,
      title: form.title,
      description: form.description,
      salary: form.salary,
      location: form.location,
      company: {
        name: form.companyName,
        description: form.companyDescription,
        contactEmail: form.companyContactEmail,
        contactPhone: form.companyContactPhone,
      },
    };
  }
  empty(field, sms = "El campo no puede quedar vacio") {
    if (field.length === 0) return sms;
    return "";
  }
  salaryoptions() {
    return [
      { value: "Debajo de $500 mlc", text: "Debajo de $500 mlc" },
      { value: "$500 mlc - $600 mlc", text: "$500 mlc - $600 mlc" },
      { value: "$600 mlc - $700 mlc", text: "$600 mlc - $700 mlc" },
      { value: "$700 mlc - $800 mlc", text: "$700 mlc - $800 mlc" },
      { value: "$800 mlc - $900 mlc", text: "$800 mlc - $900 mlc" },
      { value: "$900 mlc - $1000 mlc", text: "$900 mlc - $1000 mlc" },
      { value: "$1000 mlc - $1250 mlc", text: "$1000 mlc - $1250 mlc" },
      { value: "$1250 mlc - $1500 mlc", text: "$1250 mlc - $1500 mlc" },
      { value: "$1500 mlc - $1750 mlc", text: "$1500 mlc - $1750 mlc" },
      { value: "$1750 mlc - $2000 mlc", text: "$1750 mlc - $2000 mlc" },
      { value: "Mas de $2000 mlc", text: "Mas de $2000 mlc" },
    ];
  }
  worktype() {
    return [
      { value: "Tiempo-completo", text: "Tiempo completo" },
      { value: "Medio-tiempo", text: "Medio tiempo" },
      { value: "Remoto", text: "Remoto" },
      { value: "Internado", text: "Internado" },
    ];
  }
}

export class Validator {
  empty(field, sms = "El campo no puede quedar vacio") {
    if (field.length === 0) return sms;
    return "";
  }
}
