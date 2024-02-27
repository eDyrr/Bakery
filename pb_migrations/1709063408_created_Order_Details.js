/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b3thpbilf5zmvl1",
    "created": "2024-02-27 19:50:08.894Z",
    "updated": "2024-02-27 19:50:08.894Z",
    "name": "Order_Details",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "juvynowu",
        "name": "product",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "lrrdj9bvjupb48l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "it9k6h27",
        "name": "quantity",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b3thpbilf5zmvl1");

  return dao.deleteCollection(collection);
})
