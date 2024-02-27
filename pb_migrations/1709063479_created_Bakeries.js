/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dz3qvu225z9k476",
    "created": "2024-02-27 19:51:19.484Z",
    "updated": "2024-02-27 19:51:19.484Z",
    "name": "Bakeries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3rd6cadv",
        "name": "Location",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "k3dq7fmd",
        "name": "Picture",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("dz3qvu225z9k476");

  return dao.deleteCollection(collection);
})
