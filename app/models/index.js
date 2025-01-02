import Owner from "./Owner.js";
import Business from "./Business.js";

// Definisikan asosiasi (relasi)
Owner.hasMany(Business, { foreignKey: "business_owner_id", as: "business" });
Business.belongsTo(Owner, { foreignKey: "business_owner_id", as: "bussiness_owner" });

// Ekspor model dan asosiasi
export { Owner, Business };