export enum StoreStatus {
     INITIAL = "initial", // Bu genellelikle fetch başlamadan önce
     PENDING = "pending", // Genellikle Fetch esnasında
     SUCCESS = "success", // Genellikle Fetch başarılı olduğunda
     ERROR = "error", // Genellikle Fetch başarısız olduğunda
}
