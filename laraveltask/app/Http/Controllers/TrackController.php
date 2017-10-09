<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Track;

class TrackController extends Controller
{
  public function onAdd(Request $request) {
    $tracks = new Track();
    $tracks->id_album = $request->input('id_album');
    $tracks->artist = $request->input('artist');
    $tracks->title = $request->input('title');
    $tracks->time = $request->input('time');
    $tracks->save();
    return response()->json(['tracks' => $tracks], 201);
  }

  public function onDisplay() {
    $tracks = Track::all();
    $response = ['tracks' => $tracks];
    return response()->json($response, 200);
  }

  public function onUpdate(Request $request, $id_track) {
    $tracks = Track::find($id_track);
    if (!$tracks) {
      return response()->json(['message' => 'Document not found'], 404);
    }
    $tracks->id_album = $request->input('id_album');
    $tracks->artist = $request->input('artist');
    $tracks->title = $request->input('title');
    $tracks->time = $request->input('time');
    $tracks->save();
    return response()->json(['albums' => $tracks], 200);
  }

  public function onDelete($id_track)
  {
    $tracks = Track::find($id_track);
    $tracks->delete();
    return response()->json(['message' => 'Track deleted'], 200);
  }
}
