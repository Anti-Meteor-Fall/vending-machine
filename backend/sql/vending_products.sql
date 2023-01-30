BEGIN;

\encoding UTF8;

-- vending_product
-- DELETE FROM vending_product;
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('アクエリアス', 160, 'products/aquarius1.png', TRUE, 10, current_timestamp, current_timestamp); --1
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('アクエリアスゼロカロリー', 160, 'products/aquarius2.png', TRUE, 10, current_timestamp, current_timestamp); --2
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('アクエリアス経口補水液', 160, 'products/aquarius3.png', TRUE, 10, current_timestamp, current_timestamp); --3
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('アクエリアス一日分のマルチビタミン', 160, 'products/aquarius4.png', TRUE, 10, current_timestamp, current_timestamp); --4
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('アクエリアス乳酸菌ウォーター', 160, 'products/aquarius5.png', TRUE, 10, current_timestamp, current_timestamp); --5
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('綾鷹カフェ抹茶ラテ', 160, 'products/ayataka1.png', TRUE, 10, current_timestamp, current_timestamp); --6
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('濃い綾鷹', 160, 'products/ayataka2.png', TRUE, 10, current_timestamp, current_timestamp); --7
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('綾鷹カフェほうじ茶ラテ', 160, 'products/ayataka3.png', TRUE, 10, current_timestamp, current_timestamp); --8
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('綾鷹', 160, 'products/ayataka4.png', TRUE, 10, current_timestamp, current_timestamp); --9
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('綾鷹茶葉の甘み', 160, 'products/ayataka5.png', TRUE, 10, current_timestamp, current_timestamp); --10
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('綾鷹ほうじ茶', 160, 'products/ayataka6.png', TRUE, 10, current_timestamp, current_timestamp); --11
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('綾鷹トクホ', 160, 'products/ayataka7.png', TRUE, 10, current_timestamp, current_timestamp); --12
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('CANADADRY GINGER ALE', 160, 'products/canada_dry1.png', TRUE, 10, current_timestamp, current_timestamp); --13
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('CANADADRY GINGER THE TAN SAN LEMON', 160, 'products/canada_dry2.png', TRUE, 10, current_timestamp, current_timestamp); --14
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('CANADADRY GINGER THE TAN SAN STORONG', 160, 'products/canada_dry3.png', TRUE, 10, current_timestamp, current_timestamp); --15
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('CANADADRY TONIC WATER', 160, 'products/canada_dry4.png', TRUE, 10, current_timestamp, current_timestamp); --16
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('コカ・コーラゼロ', 160, 'products/coca_cola1.png', TRUE, 10, current_timestamp, current_timestamp); --17
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('コカ・コーラ', 160, 'products/coca_cola2.png', TRUE, 10, current_timestamp, current_timestamp); --18
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('コカ・コーラエナジー', 160, 'products/coca_cola3.png', TRUE, 10, current_timestamp, current_timestamp); --19
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('コカ・コーラplus', 160, 'products/coca_cola4.png', TRUE, 10, current_timestamp, current_timestamp); --20
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('コカ・コーラゼロシュガー', 160, 'products/coca_cola5.png', TRUE, 10, current_timestamp, current_timestamp); --21
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ファンタグレープ', 160, 'products/coca_fanta1.png', TRUE, 10, current_timestamp, current_timestamp); --22
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ファンタレモン', 160, 'products/coca_fanta2.png', TRUE, 10, current_timestamp, current_timestamp); --23
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ファンタメロン', 160, 'products/coca_fanta3.png', TRUE, 10, current_timestamp, current_timestamp); --24
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ファンタオレンジ', 160, 'products/coca_fanta4.png', TRUE, 10, current_timestamp, current_timestamp); --25
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('プレミアグレープ', 160, 'products/coca_fanta5.png', TRUE, 10, current_timestamp, current_timestamp); --26
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('プレミアオレンジ', 160, 'products/coca_fanta6.png', TRUE, 10, current_timestamp, current_timestamp); --27
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ヨーグルラッシュ', 160, 'products/coca_fanta7.png', TRUE, 10, current_timestamp, current_timestamp); --28
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('プレミアレモン', 160, 'products/coca_fanta8.png', TRUE, 10, current_timestamp, current_timestamp); --29
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージアブラック', 160, 'products/georgia1.png', TRUE, 10, current_timestamp, current_timestamp); --30
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージアカフェラテ', 160, 'products/georgia2.png', TRUE, 10, current_timestamp, current_timestamp); --31
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクのカフェオレ(cold)', 160, 'products/georgia3.png', TRUE, 10, current_timestamp, current_timestamp); --32
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクのカフェオレ(hot)', 160, 'products/georgia3.png', TRUE, 10, current_timestamp, current_timestamp); --33
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア無糖ブラック(cold)', 160, 'products/georgia4.png', TRUE, 10, current_timestamp, current_timestamp); --34
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア無糖ブラック(hot)', 160, 'products/georgia4.png', TRUE, 10, current_timestamp, current_timestamp); --35
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア香る微糖(cold)', 160, 'products/georgia5.png', TRUE, 10, current_timestamp, current_timestamp); --36
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア香る微糖(hot)', 160, 'products/georgia5.png', TRUE, 10, current_timestamp, current_timestamp); --37
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア微糖(cold)', 160, 'products/georgia6.png', TRUE, 10, current_timestamp, current_timestamp); --38
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア微糖(hot)', 160, 'products/georgia6.png', TRUE, 10, current_timestamp, current_timestamp); --39
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクのカフェオレ(hot)', 160, 'products/georgia7.png', TRUE, 10, current_timestamp, current_timestamp); --40
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクのカフェオレ(cold)', 160, 'products/georgia7.png', TRUE, 10, current_timestamp, current_timestamp); --41
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクココア(cold)', 160, 'products/georgia8.png', TRUE, 10, current_timestamp, current_timestamp); --42
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクココア(hot)', 160, 'products/georgia8.png', TRUE, 10, current_timestamp, current_timestamp); --43
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージア贅沢ミルクココア(cold)', 160, 'products/georgia8.png', TRUE, 10, current_timestamp, current_timestamp); --44
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージアエメラルドマウンテン(cold)', 160, 'products/georgia9.png', TRUE, 10, current_timestamp, current_timestamp); --45
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージアエメラルドマウンテン(hot)', 160, 'products/georgia9.png', TRUE, 10, current_timestamp, current_timestamp); --46
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージアザ・プレミアム', 160, 'products/georgia10.png', TRUE, 10, current_timestamp, current_timestamp); --47
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('ジョージアザ・プレミアム　スペシャルエディション', 160, 'products/georgia11.png', TRUE, 10, current_timestamp, current_timestamp); --48
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('紅茶花伝　ロイヤルミルクティー', 160, 'products/kouchakaden1.png', TRUE, 10, current_timestamp, current_timestamp); --49
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('紅茶花伝　クラフティー贅沢しぼりオレンジティー', 160, 'products/kouchakaden2.png', TRUE, 10, current_timestamp, current_timestamp); --50
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('紅茶花伝　クラフティー贅沢しぼりピーチティー', 160, 'products/kouchakaden3.png', TRUE, 10, current_timestamp, current_timestamp); --51
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('紅茶花伝　クラフティー贅沢しぼりレモンティー', 160, 'products/kouchakaden4.png', TRUE, 10, current_timestamp, current_timestamp); --52
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('紅茶花伝　無糖ストレートティー', 160, 'products/kouchakaden5.png', TRUE, 10, current_timestamp, current_timestamp); --53
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('いろはす', 160, 'products/irohas1.png', TRUE, 10, current_timestamp, current_timestamp); --54
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('いろはす　もも', 160, 'products/irohas2.png', TRUE, 10, current_timestamp, current_timestamp); --55
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('いろはす　なし', 160, 'products/irohas3.png', TRUE, 10, current_timestamp, current_timestamp); --56
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('いろはす　天然水にれもん', 160, 'products/irohas4.png', TRUE, 10, current_timestamp, current_timestamp); --57
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('いろはす　塩とレモン', 160, 'products/irohas5.png', TRUE, 10, current_timestamp, current_timestamp); --58
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('いろはす　シャインマスカット', 160, 'products/irohas6.png', TRUE, 10, current_timestamp, current_timestamp); --59
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('リアルゴールド', 160, 'products/realgold1.png', TRUE, 10, current_timestamp, current_timestamp); --60
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('リアルゴールド　ウルトラチャージ', 160, 'products/realgold2.png', TRUE, 10, current_timestamp, current_timestamp); --61
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('リアルゴールド　X', 160, 'products/realgold3.png', TRUE, 10, current_timestamp, current_timestamp); --62
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('リアルゴールド　Y', 160, 'products/realgold4.png', TRUE, 10, current_timestamp, current_timestamp); --63
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('爽健美茶', 160, 'products/sokenbicya.png', TRUE, 10, current_timestamp, current_timestamp); --64
insert into vending_product (name, price, image, is_set, quantity, created_at, updated_at) values ('スプライト', 160, 'products/sprite1.png', TRUE, 10, current_timestamp, current_timestamp); --65

-- vending_order_method
COMMIT;
