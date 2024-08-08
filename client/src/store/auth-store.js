import { createWithEqualityFn } from "zustand/traditional"
import { persist, createJSONStorage } from "zustand/middleware"
import fakeDoctor, { fakePatient } from "../data/fake_user"

const getRole = (role) => {
    switch (role) {
        case "doctor":
            return fakeDoctor
        case "patient":
            return fakePatient
    }
}

const useAuthStore = createWithEqualityFn()(
    persist(
        (set, get) => ({
            isLogged: false,
            user: null,
            token: null,


            login: (data, role) => {

                if (!get().isLogged) {
                    set(() => ({
                        isLogged: true,
                        user: data?.user ?? getRole(role),
                        token: data?.token
                    }))
                }

            },
            logout: () => {
                if (get().isLogged) {
                    set(() => ({
                        isLogged: false,
                        user: null,
                        token: null
                    }))
                }
            }
        }),
        {
            name: "user",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)

export default useAuthStore