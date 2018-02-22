package me.thepokedex.dexter;

import android.content.Context;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;


/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link Pokedex.OnFragmentInteractionListener} interface
 * to handle interaction events.
 * Use the {@link Pokedex#newInstance} factory method to
 * create an instance of this fragment.
 */
public class Pokedex extends Fragment {

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private String mParam1;
    private String mParam2;

    private ListView listView;
    private ArrayList<String> nameList = new ArrayList<String>();
    private ArrayList<String> pidList = new ArrayList<String>();
    private final static String URL = "https://api.thepokedex.me/?o=pn";

    private OnFragmentInteractionListener mListener;

    public Pokedex() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment Pokedex.
     */
    // TODO: Rename and change types and number of parameters
    public static Pokedex newInstance(String param1, String param2) {
        Pokedex fragment = new Pokedex();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }

        new FetchDataTask().execute(URL);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_pokedex, container, false);

        listView = (ListView) view.findViewById(R.id.listView);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick (AdapterView < ? > adapter, View view,int position, long id) {
                int pid = position + 1;
                Bundle args = new Bundle();
                args.putInt("param1", pid);
                Pokemon nextFrag = new Pokemon();
                nextFrag.setArguments(args);
                FragmentTransaction transaction = getActivity().getSupportFragmentManager().beginTransaction();
                transaction.replace(R.id.frame_container, nextFrag);
                transaction.addToBackStack(null);
                transaction.commit();
            }

        });

        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnFragmentInteractionListener) {
            mListener = (OnFragmentInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        void onFragmentInteraction(Uri uri);
    }

    private class FetchDataTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... params) {

            InputStream inputStream = null;
            String result = null;
            HttpClient client = new DefaultHttpClient();
            HttpGet httpGet = new HttpGet(params[0]);

            try {

                HttpResponse response = client.execute(httpGet);
                inputStream = response.getEntity().getContent();

                // convert inputstream to string
                if (inputStream != null) {
                    result = convertInputStreamToString(inputStream);
                    Log.i("App", "Data received:" + result);

                } else
                    result = "Failed to fetch data";

                return result;

            } catch (ClientProtocolException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

            return null;
        }

        @Override
        protected void onPostExecute(String dataFetched) {
            //parse the JSON data and then display
            parseJSON(dataFetched);
        }


        private String convertInputStreamToString(InputStream inputStream) throws IOException {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            String line = "";
            String result = "";
            while ((line = bufferedReader.readLine()) != null)
                result += line;

            inputStream.close();
            return result;

        }

        private void parseJSON(String data) {

            try {

                JSONObject object = new JSONObject(data);
                JSONArray jsonMainNode  = object.getJSONArray("POKEMON");

                for (int i = 0; i < jsonMainNode.length(); i++)
                {
                    JSONObject Jasonobject = jsonMainNode.getJSONObject(i);
                }

                int jsonArrLength = jsonMainNode.length();
                Log.d("DEBUG", String.valueOf(jsonArrLength));

                for (int i = 0; i < jsonArrLength; i++) {
                    JSONObject jsonChildNode = jsonMainNode.getJSONObject(i);
                    String name = jsonChildNode.getString("NAME");
                    String pid = jsonChildNode.getString("PID");
                    nameList.add(name);
                    pidList.add(pid);
                };

                ArrayAdapter adapter = new ArrayAdapter(Pokedex.this.getActivity(), android.R.layout.simple_list_item_2, android.R.id.text1, nameList) {
                    @Override
                    public View getView(int position, View convertView, ViewGroup parent) {
                        View view = super.getView(position, convertView, parent);
                        TextView text1 = (TextView) view.findViewById(android.R.id.text1);
                        TextView text2 = (TextView) view.findViewById(android.R.id.text2);

                        text1.setText(nameList.get(position));
                        text2.setText("#" + pidList.get(position));
                        return view;
                    }
                };

                // Assign adapter to ListView
                listView.setAdapter(adapter);

            } catch (Exception e) {
                Log.i("App", "Error parsing data" + e.getMessage());

            }
        }
    }
}
