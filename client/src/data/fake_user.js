// FOR MODE: only-front

const fakeDoctor = {
    id: 667,
    dni: 31031666,
    age: 24,
    birthdate: "2000-11-07",
    name: "Franco",
    lastName: "Maidana",
    role: "ROLE_DOCTOR",
    gender: "MALE",
    email: "maidana_doctor@test.com",
    address: {
        country: "Argentina",
        province: "Buenos Aires",
        city: "Rafael Castillo",
        street: "Calle Verdadera 123"
    },
}

export const fakePatient = {
    id: 666,
    dni: 36036666,
    age: 24,
    birthdate: "2000-11-07",
    name: "Franco",
    lastName: "Maidana",
    role: "ROLE_PATIENT",
    gender: "MALE",
    email: "maidana@test.com",
    address: {
        country: "Argentina",
        province: "Buenos Aires",
        city: "Rafael Castillo",
        street: "Calle Verdadera 123"
    },
    imc: 25.6
}


export default fakeDoctor;
