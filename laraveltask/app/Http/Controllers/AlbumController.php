<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Album;

class AlbumController extends Controller
{
      public function index() {
        $string = 'Hello Word';
        $string2 = 'Hello Word!!!!!!';
        $albums = Album::select(['id_album','name','year'])->get();
        dump($albums);
        return view('music')->with(['string' => $string, 'string2' => $string2]);
      }

      public function onAdd(Request $request) {
        $albums = new Album();
        $albums->title = $request->input('title');
        $albums->year = $request->input('year');
        $albums->save();
        return response()->json(['albums' => $albums], 201);
      }

      public function onDisplay() {
        $albums = Album::all();
        $response = ['albums' => $albums];
        return response()->json($response, 200);
      }

      public function onUpdate(Request $request, $id_album) {
        $albums = Album::find($id_album);
        if (!$albums) {
          return response()->json(['message' => 'Document not found'], 404);
        }
        $albums->title = $request->input('title');
        $albums->year = $request->input('year');
        $albums->save();
        return response()->json(['albums' => $albums], 200);
      }

      public function onDelete($id_album)
      {
        $albums = Album::find($id_album);
        $albums->delete();
        return response()->json(['message' => 'Album deleted'], 200);
      }
}
