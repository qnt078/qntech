import Swal from "sweetalert2";

export default defineNuxtPlugin((nuxtApp: any) => {
  const { token } = useAuth();
  const baseUrl = `${nuxtApp.$config.public.apiBase}`;

  const authToken = token.value;

  const apiClient = {
    async post(resource: string, params: any) {
      const { pending, error, status, data }: any = await useFetch(
        `${baseUrl}${resource}`,
        {
          method: "POST",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
        }
      );
      if (pending.value) {
        throw new Error("API request is pending");
      }
      if (error.value) {
        Swal.fire({
          toast: true,
          title: "Oops!",
          text: "Please try again later.",
          icon: "error",
          iconColor: 'white',
          customClass: {
            popup: "colored-toast",
          },
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          showConfirmButton: false,
        });
        throw new Error(`API request failed: ${error.value}`);
      }
      
      return Swal.fire({
        toast: true,
        title: "Yeay!",
        text: "You will receive an email confirmation shortly.",
        icon: "success",
        iconColor: 'white',
        customClass: {
          popup: "colored-toast",
        },
        timer: 3000,
        timerProgressBar: true,
        position: "top-end",
        showConfirmButton: false,
      });
    },
    async get(resource: string) {
      const { data, pending, error, status }: any = await useFetch(
        `${baseUrl}${resource}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
        }
      );
      if (pending.value) {
        throw new Error("API request is pending");
      }
      if (error.value) {
        throw new Error(
          `API request failed: ${error.value.statusCode} ${error.value.message}`
        );
      }
      return data.value;
    },
    async put(resource: string, params: any) {
      const { data, pending, error, status }: any = await useFetch(
        `${baseUrl}${resource}`,
        {
          method: "PUT",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
        }
      );
      if (pending.value) {
        throw new Error("API request is pending");
      }
      if (error.value) {
        Swal.fire({
          toast: true,
          title: "Error",
          text: "An error occurred while processing your request.",
          icon: "error",
          position: "top-end",
          showConfirmButton: false,
          iconColor: 'white',
          customClass: {
            popup: "colored-toast",
          },
          timer: 3000,
          timerProgressBar: true,

        });
        throw new Error(`API request failed: ${status.value}`);
      }
      return Swal.fire({
        toast: true,
        title: "Your order has been updated!",
        text: "You will receive an email confirmation shortly.",
        icon: "success",
        position: "top-end",
        showConfirmButton: false,
        iconColor: 'white',
        customClass: {
          popup: "colored-toast",
        },
        timer: 3000,
        timerProgressBar: true,
      });
    },
    async delete(resource: string) {
      const { data, pending, error, status }: any = await useFetch(
        `${baseUrl}${resource}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
        }
      );
      if (pending.value) {
        throw new Error("API request is pending");
      }
      if (error.value) {
        throw new Error(`API request failed: ${status.value}`);
      }
      return Swal.fire({
        toast: true,
        title: "Your order has been deleted!",
        text: "You will receive an email confirmation shortly.",
        icon: "success",
        position: "top-end",
        showConfirmButton: false,
        iconColor: 'white',
        customClass: {
          popup: "colored-toast",
        },
        timer: 3000,
        timerProgressBar: true,
      });
    },
  };
  return {
    provide: {
      api: apiClient,
    },
  };
});
