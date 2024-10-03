const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.FileSystem,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Mouse: 0},
	{Text: 0},
	{Text2: 0},
	{Keyboard: 0},
	{Touch: 0},
	{LocalStorage: 0},
	{FileSystem: 0},
	{Sprite3: 0},
	{Text3: 0},
	{Sprite4: 0},
	{Text4: 0},
	{clicks: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Keyboard: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	FileSystem: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text4: class extends self.ITextInstance {}
}